"use strict"

const axios = require('axios')
const cheerio = require('cheerio')
const moment = require('moment')

const { Op } = require("sequelize");
const models = require('../../models')
const Team = models.Team
const League = models.League
const Season = models.Season
const Match = models.Match
const LeagueSeason = models.LeagueSeason

const getTeams = () => {
  return new Promise((resolve, reject) => {
    Team.findAll()
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

const addTeam = (team) => {
  return new Promise((resolve, reject) => {
    Team.create(team).then((team) => {
      resolve(team)
    }).catch(err => {
      reject(err)
    })
  })
}

const getLeagues = () => {
  return new Promise((resolve, reject) => {
    League.findAll()
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

const addLeague = (league) => {
  return new Promise((resolve, reject) => {
    League.create(league).then((league) => {
      resolve(league)
    }).catch(err => {
      reject(err)
    })
  })
}

const getSeasons = () => {
  return new Promise((resolve, reject) => {
    Season.findAll()
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

const addSeason = (season) => {
  return new Promise((resolve, reject) => {
    Season.create(season).then((season) => {
      resolve(season)
    }).catch(err => {
      reject(err)
    })
  })
}

const addMatch = (match) => {
  return new Promise((resolve, reject) => {
    Match.create(match).then((match) => {
      resolve(match)
    }).catch(err => {
      reject(err)
    })
  })
}

const getJourney = (domain, league, season, journey) => {
  return new Promise((resolve, reject) => {

    console.log(domain+'/'+league+season+'/grupo1/jornada'+journey)

    axios.get(domain+'/'+league+season+'/grupo1/jornada'+journey).then((response) => {
  
      let $ = cheerio.load(response.data)
    
      let exist = $('#pretempbox div h3')
      if(exist.text().includes('partidos')){console.log('No hay partidos'); return;}
    
      let matchTable = $('#tabla1 tr.vevent')
      let date, date_format, local, visitor, marker, match_link, local_link, visitor_link, state, local_goals, visitor_goals, result;
      var data = [];
      for (let i = 0; i < matchTable.length; i++){
        
        date = $(matchTable[i]).find('td.fecha')
        local = $(matchTable[i]).find('td.equipo1').text().trim()
        local_link = $(matchTable[i]).find('td.equipo1 a')[0].attribs.href
        visitor = $(matchTable[i]).find('td.equipo2').text().trim()
        visitor_link = $(matchTable[i]).find('td.equipo2 a')[0].attribs.href        
        
        local_goals = null
        visitor_goals = null
        match_link = null
        result = null
        state = $(matchTable[i]).find('td.fecha span.fecha-status').text().trim()
        if(state == "Finalizado"){
          marker = $(matchTable[i]).find('td.rstd a').text().split('-');
          local_goals = marker[0]
          if(local_goals.length > 1){ 
            local_goals = local_goals.substr(-2).trim() 
          }
          visitor_goals = marker[1]
          if(visitor.length > 1){ 
            visitor_goals = visitor_goals.substr(0, 2).trim() 
          }
          match_link = domain+$(matchTable[i]).find('a.url').attr('href')
          if(local_goals == visitor_goals){
            result = 'X'
          }else if(local_goals > visitor_goals){
            result = '1'
          }else{
            result = '2'
          }
        }
        data.push({
          journey: journey, 
          local: local, 
          local_goals: local_goals, 
          local_link: domain+local_link, 
          visitor: visitor, 
          visitor_goals: visitor_goals, 
          visitor_link: domain+visitor_link, 
          match_link: match_link,
          match_date: moment(date.data('date')).format(),
          state: state,
          result: result
        })
      }
      resolve(data)
    })

  })
}

const getLeagueSeasons = () => {
  return new Promise((resolve, reject) => {
    LeagueSeason.findAll({ include: ['league', 'season'] })
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  })
}

async function run(){

  var config = {
    domain: 'https://www.resultados-futbol.com'
  }

  var teams = await getTeams()

  var matches = []  
  matches = matches.concat(await getJourney(config.domain, 'premier', '2012', '33'))
  console.log(matches)
  for (let i = 0; i < matches.length; i++){
    var opt = matches[i]
    let findLocal = teams.find((team)=>{ return team.name === opt.local})
    if( findLocal === undefined){
      findLocal = await addTeam({name: opt.local, link: opt.local_link})
      teams = await getTeams()
    }

    let findVisitor = teams.find((team)=>{ return team.name === opt.visitor})
    if( findVisitor === undefined){
      findVisitor = await addTeam({name: opt.visitor, link: opt.visitor_link})
      teams = await getTeams()
    }

    opt.leagueId = 3
    opt.seasonId = 12
    opt.localId = findLocal.id
    opt.visitorId = findVisitor.id
    await addMatch(opt)
  }
    
return 


  var data = await getLeagueSeasons()

  for (let j = 0; j < data.length; j++){

    var matches = []
    for (let i = 1; i <= data[j].matches; i++){
      matches = matches.concat(await getJourney(config.domain, data[j].league.code, data[j].season.code, i))
      console.log(data[j].league.code +'|'+data[j].season.code+'|'+i)
    }

    for (let i = 0; i < matches.length; i++){
      var opt = matches[i]
      let findLocal = teams.find((team)=>{ return team.name === opt.local})
      if( findLocal === undefined){
        findLocal = await addTeam({name: opt.local, link: opt.local_link})
        teams = await getTeams()
      }
  
      let findVisitor = teams.find((team)=>{ return team.name === opt.visitor})
      if( findVisitor === undefined){
        findVisitor = await addTeam({name: opt.visitor, link: opt.visitor_link})
        teams = await getTeams()
      }
  
      opt.leagueId = data[j].league.id
      opt.seasonId = data[j].season.id
      opt.localId = findLocal.id
      opt.visitorId = findVisitor.id
      await addMatch(opt)
    }

  }


/*
  var matches = []
  matches = matches.concat(await getJourney(config.domain, 'segunda', '2015', '38'))
  matches = matches.concat(await getJourney(config.domain, 'ligue_1', '2020', '28'))
  matches = matches.concat(await getJourney(config.domain, 'ligue_1', '2021', '38'))
  console.log(matches)
  */


  /*
  for (let i = 1; i < league.matchesPerSeason + 1; i++){
    matches = matches.concat(await getJourney(config.domain, league.code, season.code, i))
  }

  
  */


  /*
  var config = {
    domain: 'https://www.resultados-futbol.com',
    leagues: [
      {name: 'Primera División', code: 'primera', matchesPerSeason: 38}
    ],
    seasons: [
      {name: '2000-2001', code: '2001'},
      {name: '2001-2002', code: '2002'},
      {name: '2002-2003', code: '2003'},
      {name: '2003-2004', code: '2004'},
      {name: '2004-2005', code: '2005'},
      {name: '2005-2006', code: '2006'},
      {name: '2006-2007', code: '2007'},
      {name: '2007-2008', code: '2008'},
      {name: '2008-2009', code: '2009'},
      {name: '2009-2010', code: '2010'},
    ]
  }
  
  var leagues = await getLeagues()
  for (let i = 0; i < config.leagues.length; i++){
    let findLeague = leagues.find((league)=>{ return league.name === config.leagues[i].name})
    if( findLeague === undefined){
      await addLeague(config.leagues[i])
    }
  }
  leagues = await getLeagues()

  var seasons = await getSeasons()
  for (let i = 0; i < config.seasons.length; i++){
    let findSeason = seasons.find((season)=>{ return season.name === config.seasons[i].name})
    if( findSeason === undefined){
      await addSeason(config.seasons[i])
    }
  }
  seasons = await getSeasons()

  var teams = await getTeams()

  for (let i = 0; i < config.leagues.length; i++){
    for (let j = 0; j < config.seasons.length; j++){
      let league = leagues.find((league)=>{ return league.name === config.leagues[i].name})
      let season = seasons.find((season)=>{ return season.name === config.seasons[j].name})

      var matches = []
      for (let i = 1; i < league.matchesPerSeason + 1; i++){
        matches = matches.concat(await getJourney(config.domain, league.code, season.code, i))
      }

      for (let i = 0; i < matches.length; i++){
        var opt = matches[i]
        let findLocal = teams.find((team)=>{ return team.name === opt.local})
        if( findLocal === undefined){
          findLocal = await addTeam({name: opt.local, link: opt.local_link})
          teams = await getTeams()
        }

        let findVisitor = teams.find((team)=>{ return team.name === opt.visitor})
        if( findVisitor === undefined){
          findVisitor = await addTeam({name: opt.visitor, link: opt.visitor_link})
          teams = await getTeams()
        }

        let result;
        if(opt.local_goals == opt.visitor_goals){
          result = 'X'
        }else if(opt.local_goals > opt.visitor_goals){
          result = '1'
        }else{
          result = '2'
        }

        opt.leagueId = league.id
        opt.seasonId = season.id
        opt.localId = findLocal.id
        opt.visitorId = findVisitor.id
        opt.result = result
        await addMatch(opt)
      }
    }
  } 
  */
}

run()