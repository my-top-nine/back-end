
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        //movies
        {id: 1, name: 'The Room', category: 'Movies'},
        {id: 2, name: 'Spider-Man: Homecoming', category: 'Movies'},
        {id: 3, name: 'Harry Potter and the Prisoner of Azkhaban', category: 'Movies'},
        {id: 4, name: 'The Empire Strikes Back', category: 'Movies'},
        {id: 5, name: "Barry Gordy's The Last Dragon", category: 'Movies'},
        {id: 6, name: 'Troll 2', category: 'Movies'},
        {id: 7, name: 'Thor: Ragnarok', category: 'Movies'},
        {id: 8, name: 'Pulp Fiction', category: 'Movies'},
        {id: 9, name: 'Get Out', category: 'Movies'},
        {id: 10, name: 'Back To The Future 2', category: 'Movies'},
        {id: 11, name: 'Mean Girls', category: 'Movies'},
        {id: 12, name: 'The Big Lebowski', category: 'Movies'},
        {id: 13, name: 'The Breakfast Club', category: 'Movies'},
        {id: 14, name: 'Terminator 2: Judgment Day', category: 'Movies'},
        {id: 15, name: 'Shrek', category: 'Movies'},
        {id: 16, name: 'Shrek 2', category: 'Movies'},
        {id: 17, name: 'Bull Durham', category: 'Movies'},
        {id: 18, name: 'The Hunger Games', category: 'Movies'},
        {id: 19, name: 'Titanic', category: 'Movies'},
        {id: 20, name: 'The Hobbit', category: 'Movies'},
        //video games
        {id: 21, name: 'Pong', category: 'Video Games'},
        {id: 22, name: 'Spider-Man: Maximum Carnage', category: 'Video Games'},
        {id: 23, name: 'Call of Duty: Modern Warfare', category: 'Video Games'},
        {id: 24, name: 'Team Fortress 2', category: 'Video Games'},
        {id: 25, name: "Street Fighter V", category: 'Video Games'},
        {id: 26, name: 'Final Fantasy VII', category: 'Video Games'},
        {id: 27, name: 'World of Warcraft', category: 'Video Games'},
        {id: 28, name: 'Dead Cells', category: 'Video Games'},
        {id: 29, name: 'I Want To Be The Guy', category: 'Video Games'},
        {id: 30, name: 'The Walking Dead', category: 'Video Games'},
        {id: 31, name: 'Fortnite', category: 'Video Games'},
        {id: 32, name: 'League of Legends', category: 'Video Games'},
        {id: 33, name: 'Magic The Gathering: Arena', category: 'Video Games'},
        {id: 34, name: 'Dream Daddy: A Dad Dating Simulator', category: 'Video Games'},
        {id: 35, name: 'Apex Legends', category: 'Video Games'},
        {id: 36, name: 'Path of Exile', category: 'Video Games'},
        {id: 37, name: 'Chrono Trigger', category: 'Video Games'},
        {id: 38, name: 'Devil May Cry 3', category: 'Video Games'},
        {id: 39, name: 'Resident Evil 4', category: 'Video Games'},
        {id: 40, name: 'Life is Strange', category: 'Video Games'},
        //music
        {id: 41, name: 'Run The Jewels', category: 'Music'},
        {id: 42, name: 'Le Tigre', category: 'Music'},
        {id: 43, name: 'The Beatles', category: 'Music'},
        {id: 44, name: 'Rage Against the Machine', category: 'Music'},
        {id: 45, name: "Lil Xan", category: 'Music'},
        {id: 46, name: 'Lil Pump', category: 'Music'},
        {id: 47, name: 'Lil Peep', category: 'Music'},
        {id: 48, name: 'Credence Clearwater Revival', category: 'Music'},
        {id: 49, name: 'Ariana Grande', category: 'Music'},
        {id: 50, name: 'Maroon 5', category: 'Music'},
        {id: 51, name: 'Cardi B', category: 'Music'},
        {id: 52, name: 'Ellie Goulding', category: 'Music'},
        {id: 53, name: 'Tupac', category: 'Music'},
        {id: 54, name: 'Father John Misty', category: 'Music'},
        {id: 55, name: 'The Coup', category: 'Music'},
        {id: 56, name: 'Jason Isbell', category: 'Music'},
        {id: 57, name: 'Ennio Morricone', category: 'Music'},
        {id: 58, name: 'Eminem', category: 'Music'},
        {id: 59, name: 'Maximum the Hormone', category: 'Music'},
        {id: 60, name: 'PJ Harvey', category: 'Music'},
      ]);
    });
};