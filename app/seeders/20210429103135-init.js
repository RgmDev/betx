'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Countries', [
      { name: 'ESP', code: 'es' },
      { name: 'ENG', code: '_England' },
      { name: 'ITA', code: 'it' },
      { name: 'FRA', code: 'fr' },
      { name: 'DEU', code: 'de' }
    ]);

    await queryInterface.bulkInsert('Leagues', [
      { name: 'Primera División', code: 'primera', countryId: 1 },
      { name: 'Segunda División', code: 'segunda', countryId: 1 },
      { name: 'Premier League', code: 'premier', countryId: 2 },
      { name: 'Championship', code: 'championship', countryId: 2 },
      { name: 'Serie A', code: 'serie_a', countryId: 3 },
      { name: 'Serie B', code: 'serie_b', countryId: 3 },
      { name: 'Ligue 1', code: 'ligue_1', countryId: 4 },
      { name: 'Ligue 2', code: 'ligue_2', countryId: 4 },
      { name: 'Bundesliga', code: 'bundesliga', countryId: 5 },
      { name: 'Bundesliga 2', code: 'bundesliga_2', countryId: 5 }
    ]);

    await queryInterface.bulkInsert('Seasons', [
      { name: '2000-2001', code: '2001' },
      { name: '2001-2002', code: '2002' },
      { name: '2002-2003', code: '2003' },
      { name: '2003-2004', code: '2004' },
      { name: '2004-2005', code: '2005' },
      { name: '2005-2006', code: '2006' },
      { name: '2006-2007', code: '2007' },
      { name: '2007-2008', code: '2008' },
      { name: '2008-2009', code: '2009' },
      { name: '2009-2010', code: '2010' },
      { name: '2010-2011', code: '2011' },
      { name: '2011-2012', code: '2012' },
      { name: '2012-2013', code: '2013' },
      { name: '2013-2014', code: '2014' },
      { name: '2014-2015', code: '2015' },
      { name: '2015-2016', code: '2016' },
      { name: '2016-2017', code: '2017' },
      { name: '2017-2018', code: '2018' },
      { name: '2018-2019', code: '2019' },
      { name: '2019-2020', code: '2020' }
    ]);

    await queryInterface.bulkInsert('LeagueSeasons', [
      // Primera division
      { leagueId: 1, seasonId: 1, matches: 38 },
      { leagueId: 1, seasonId: 2, matches: 38 },
      { leagueId: 1, seasonId: 3, matches: 38 },
      { leagueId: 1, seasonId: 4, matches: 38 },
      { leagueId: 1, seasonId: 5, matches: 38 },
      { leagueId: 1, seasonId: 6, matches: 38 },
      { leagueId: 1, seasonId: 7, matches: 38 },
      { leagueId: 1, seasonId: 8, matches: 38 },
      { leagueId: 1, seasonId: 9, matches: 38 },
      { leagueId: 1, seasonId: 10, matches: 38 },
      { leagueId: 1, seasonId: 11, matches: 38 },
      { leagueId: 1, seasonId: 12, matches: 38 },
      { leagueId: 1, seasonId: 13, matches: 38 },
      { leagueId: 1, seasonId: 14, matches: 38 },
      { leagueId: 1, seasonId: 15, matches: 38 },
      { leagueId: 1, seasonId: 16, matches: 38 },
      { leagueId: 1, seasonId: 17, matches: 38 },
      { leagueId: 1, seasonId: 18, matches: 38 },
      { leagueId: 1, seasonId: 19, matches: 38 },
      { leagueId: 1, seasonId: 20, matches: 38 },
      // Segunda division
      { leagueId: 2, seasonId: 1, matches: 42 },
      { leagueId: 2, seasonId: 2, matches: 42 },
      { leagueId: 2, seasonId: 3, matches: 42 },
      { leagueId: 2, seasonId: 4, matches: 42 },
      { leagueId: 2, seasonId: 5, matches: 42 },
      { leagueId: 2, seasonId: 6, matches: 42 },
      { leagueId: 2, seasonId: 7, matches: 42 },
      { leagueId: 2, seasonId: 8, matches: 42 },
      { leagueId: 2, seasonId: 9, matches: 42 },
      { leagueId: 2, seasonId: 10, matches: 42 },
      { leagueId: 2, seasonId: 11, matches: 42 },
      { leagueId: 2, seasonId: 12, matches: 42 },
      { leagueId: 2, seasonId: 13, matches: 42 },
      { leagueId: 2, seasonId: 14, matches: 42 },
      { leagueId: 2, seasonId: 15, matches: 42 },
      { leagueId: 2, seasonId: 16, matches: 42 },
      { leagueId: 2, seasonId: 17, matches: 42 },
      { leagueId: 2, seasonId: 18, matches: 42 },
      { leagueId: 2, seasonId: 19, matches: 42 },
      { leagueId: 2, seasonId: 20, matches: 42 },
      // premier
      { leagueId: 3, seasonId: 1, matches: 38 },
      { leagueId: 3, seasonId: 2, matches: 38 },
      { leagueId: 3, seasonId: 3, matches: 38 },
      { leagueId: 3, seasonId: 4, matches: 38 },
      { leagueId: 3, seasonId: 5, matches: 38 },
      { leagueId: 3, seasonId: 6, matches: 38 },
      { leagueId: 3, seasonId: 7, matches: 38 },
      { leagueId: 3, seasonId: 8, matches: 38 },
      { leagueId: 3, seasonId: 9, matches: 38 },
      { leagueId: 3, seasonId: 10, matches: 38 },
      { leagueId: 3, seasonId: 11, matches: 38 },
      { leagueId: 3, seasonId: 12, matches: 38 },
      { leagueId: 3, seasonId: 13, matches: 38 },
      { leagueId: 3, seasonId: 14, matches: 38 },
      { leagueId: 3, seasonId: 15, matches: 38 },
      { leagueId: 3, seasonId: 16, matches: 38 },
      { leagueId: 3, seasonId: 17, matches: 38 },
      { leagueId: 3, seasonId: 18, matches: 38 },
      { leagueId: 3, seasonId: 19, matches: 38 },
      { leagueId: 3, seasonId: 20, matches: 38 },
      // championship
      { leagueId: 4, seasonId: 1, matches: 46 },
      { leagueId: 4, seasonId: 2, matches: 46 },
      { leagueId: 4, seasonId: 3, matches: 46 },
      { leagueId: 4, seasonId: 4, matches: 46 },
      { leagueId: 4, seasonId: 5, matches: 46 },
      { leagueId: 4, seasonId: 6, matches: 46 },
      { leagueId: 4, seasonId: 7, matches: 46 },
      { leagueId: 4, seasonId: 8, matches: 46 },
      { leagueId: 4, seasonId: 9, matches: 46 },
      { leagueId: 4, seasonId: 10, matches: 46 },
      { leagueId: 4, seasonId: 11, matches: 46 },
      { leagueId: 4, seasonId: 12, matches: 46 },
      { leagueId: 4, seasonId: 13, matches: 46 },
      { leagueId: 4, seasonId: 14, matches: 46 },
      { leagueId: 4, seasonId: 15, matches: 46 },
      { leagueId: 4, seasonId: 16, matches: 46 },
      { leagueId: 4, seasonId: 17, matches: 46 },
      { leagueId: 4, seasonId: 18, matches: 46 },
      { leagueId: 4, seasonId: 19, matches: 46 },
      { leagueId: 4, seasonId: 20, matches: 46 },
      // serie a
      { leagueId: 5, seasonId: 1, matches: 34 },
      { leagueId: 5, seasonId: 2, matches: 34 },
      { leagueId: 5, seasonId: 3, matches: 34 },
      { leagueId: 5, seasonId: 4, matches: 34 },
      { leagueId: 5, seasonId: 5, matches: 38 },
      { leagueId: 5, seasonId: 6, matches: 38 },
      { leagueId: 5, seasonId: 7, matches: 38 },
      { leagueId: 5, seasonId: 8, matches: 38 },
      { leagueId: 5, seasonId: 9, matches: 38 },
      { leagueId: 5, seasonId: 10, matches: 38 },
      { leagueId: 5, seasonId: 11, matches: 38 },
      { leagueId: 5, seasonId: 12, matches: 38 },
      { leagueId: 5, seasonId: 13, matches: 38 },
      { leagueId: 5, seasonId: 14, matches: 38 },
      { leagueId: 5, seasonId: 15, matches: 38 },
      { leagueId: 5, seasonId: 16, matches: 38 },
      { leagueId: 5, seasonId: 17, matches: 38 },
      { leagueId: 5, seasonId: 18, matches: 38 },
      { leagueId: 5, seasonId: 19, matches: 38 },
      { leagueId: 5, seasonId: 20, matches: 38 },
      // serie b
      { leagueId: 6, seasonId: 1, matches: 38 },
      { leagueId: 6, seasonId: 2, matches: 38 },
      { leagueId: 6, seasonId: 3, matches: 38 },
      { leagueId: 6, seasonId: 4, matches: 46 },
      { leagueId: 6, seasonId: 5, matches: 42 },
      { leagueId: 6, seasonId: 6, matches: 42 },
      { leagueId: 6, seasonId: 7, matches: 42 },
      { leagueId: 6, seasonId: 8, matches: 42 },
      { leagueId: 6, seasonId: 9, matches: 42 },
      { leagueId: 6, seasonId: 10, matches: 42 },
      { leagueId: 6, seasonId: 11, matches: 42 },
      { leagueId: 6, seasonId: 12, matches: 42 },
      { leagueId: 6, seasonId: 13, matches: 42 },
      { leagueId: 6, seasonId: 14, matches: 42 },
      { leagueId: 6, seasonId: 15, matches: 42 },
      { leagueId: 6, seasonId: 16, matches: 42 },
      { leagueId: 6, seasonId: 17, matches: 42 },
      { leagueId: 6, seasonId: 18, matches: 42 },
      { leagueId: 6, seasonId: 19, matches: 38 },
      { leagueId: 6, seasonId: 20, matches: 38 },
      // ligue 1
      { leagueId: 7, seasonId: 1, matches: 34 },
      { leagueId: 7, seasonId: 2, matches: 34 },
      { leagueId: 7, seasonId: 3, matches: 38 },
      { leagueId: 7, seasonId: 4, matches: 38 },
      { leagueId: 7, seasonId: 5, matches: 38 },
      { leagueId: 7, seasonId: 6, matches: 38 },
      { leagueId: 7, seasonId: 7, matches: 38 },
      { leagueId: 7, seasonId: 8, matches: 38 },
      { leagueId: 7, seasonId: 9, matches: 38 },
      { leagueId: 7, seasonId: 10, matches: 38 },
      { leagueId: 7, seasonId: 11, matches: 38 },
      { leagueId: 7, seasonId: 12, matches: 38 },
      { leagueId: 7, seasonId: 13, matches: 38 },
      { leagueId: 7, seasonId: 14, matches: 38 },
      { leagueId: 7, seasonId: 15, matches: 38 },
      { leagueId: 7, seasonId: 16, matches: 38 },
      { leagueId: 7, seasonId: 17, matches: 38 },
      { leagueId: 7, seasonId: 18, matches: 38 },
      { leagueId: 7, seasonId: 19, matches: 38 },
      { leagueId: 7, seasonId: 20, matches: 38 },
      // ligue 2
      { leagueId: 8, seasonId: 1, matches: 38 },
      { leagueId: 8, seasonId: 2, matches: 38 },
      { leagueId: 8, seasonId: 3, matches: 38 },
      { leagueId: 8, seasonId: 4, matches: 38 },
      { leagueId: 8, seasonId: 5, matches: 38 },
      { leagueId: 8, seasonId: 6, matches: 38 },
      { leagueId: 8, seasonId: 7, matches: 38 },
      { leagueId: 8, seasonId: 8, matches: 38 },
      { leagueId: 8, seasonId: 9, matches: 38 },
      { leagueId: 8, seasonId: 10, matches: 38 },
      { leagueId: 8, seasonId: 11, matches: 38 },
      { leagueId: 8, seasonId: 12, matches: 38 },
      { leagueId: 8, seasonId: 13, matches: 38 },
      { leagueId: 8, seasonId: 14, matches: 38 },
      { leagueId: 8, seasonId: 15, matches: 38 },
      { leagueId: 8, seasonId: 16, matches: 38 },
      { leagueId: 8, seasonId: 17, matches: 38 },
      { leagueId: 8, seasonId: 18, matches: 38 },
      { leagueId: 8, seasonId: 19, matches: 38 },
      { leagueId: 8, seasonId: 20, matches: 38 },
      // bundesliga
      { leagueId: 9, seasonId: 1, matches: 34 },
      { leagueId: 9, seasonId: 2, matches: 34 },
      { leagueId: 9, seasonId: 3, matches: 34 },
      { leagueId: 9, seasonId: 4, matches: 34 },
      { leagueId: 9, seasonId: 5, matches: 34 },
      { leagueId: 9, seasonId: 6, matches: 34 },
      { leagueId: 9, seasonId: 7, matches: 34 },
      { leagueId: 9, seasonId: 8, matches: 34 },
      { leagueId: 9, seasonId: 9, matches: 34 },
      { leagueId: 9, seasonId: 10, matches: 34 },
      { leagueId: 9, seasonId: 11, matches: 34 },
      { leagueId: 9, seasonId: 12, matches: 34 },
      { leagueId: 9, seasonId: 13, matches: 34 },
      { leagueId: 9, seasonId: 14, matches: 34 },
      { leagueId: 9, seasonId: 15, matches: 34 },
      { leagueId: 9, seasonId: 16, matches: 34 },
      { leagueId: 9, seasonId: 17, matches: 34 },
      { leagueId: 9, seasonId: 18, matches: 34 },
      { leagueId: 9, seasonId: 19, matches: 34 },
      { leagueId: 9, seasonId: 20, matches: 34 },
      // bundesliga 2
      { leagueId: 10, seasonId: 1, matches: 34 },
      { leagueId: 10, seasonId: 2, matches: 34 },
      { leagueId: 10, seasonId: 3, matches: 34 },
      { leagueId: 10, seasonId: 4, matches: 34 },
      { leagueId: 10, seasonId: 5, matches: 34 },
      { leagueId: 10, seasonId: 6, matches: 34 },
      { leagueId: 10, seasonId: 7, matches: 34 },
      { leagueId: 10, seasonId: 8, matches: 34 },
      { leagueId: 10, seasonId: 9, matches: 34 },
      { leagueId: 10, seasonId: 10, matches: 34 },
      { leagueId: 10, seasonId: 11, matches: 34 },
      { leagueId: 10, seasonId: 12, matches: 34 },
      { leagueId: 10, seasonId: 13, matches: 34 },
      { leagueId: 10, seasonId: 14, matches: 34 },
      { leagueId: 10, seasonId: 15, matches: 34 },
      { leagueId: 10, seasonId: 16, matches: 34 },
      { leagueId: 10, seasonId: 17, matches: 34 },
      { leagueId: 10, seasonId: 18, matches: 34 },
      { leagueId: 10, seasonId: 19, matches: 34 },
      { leagueId: 10, seasonId: 20, matches: 34 }
    ]);



    /*
    await queryInterface.bulkInsert('Teams', [
      { name: 'Real Madrid', link: 'madrid/page' },
      { name: 'Barcelona', link: 'barcelona/page' }
    ]);

    await queryInterface.bulkInsert('Matches', [
      { 
        localId: 1,
        local_goals: 1,
        visitorId: 2,
        visitor_goals: 1,
        match_date: new Date(),
        leagueId: 1,
        seasonId: 1,
        journey: 1,
        result: 'X',
        match_link: 'link.com'
      }
    ]);
    */

  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
