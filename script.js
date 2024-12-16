$(document).ready(function() {

const songTitles = [
"Alive", "Alone", "Amongst the Waves", "Animal", "Baba O'Riley", "Better Man", "Black", "Breath", "Brain of J.", "Come Back", "Corduroy", "Dance of the Clairvoyants", "Dark Matter", "Daughter", "Deep", "Dissident", "Do the Evolution", "Elderly Woman Behind the Counter in a Small Town", "Eruption", "Even Flow", "Faithful", "Garden", "Given to Fly", "Got to Give", "Habit", "Hail, Hail", "Hard to Imagine", "Hunger Strike", "I Am Mine", "I Got Id", "Immortality", "Indifference", "In Hiding", "In My Tree", "Inside Job", "Interstellar Overdrive", "Jeremy", "Just Breathe", "Last Exit", "Last Kiss", "Light Years", "Little Wing", "Low Light",
"Lukin",
"Man of the Hour",
"Mind Your Manners", "No Surrender",
"Not for You",
"Nothingman",
"Once",
"Porch",
"Quick Escape",
"React, Respond",
"Rearviewmirror",
"Release",
"Rockin' in the Free World",
"Running",
"Save You",
"Scared of Fear",
"Setting Sun",
"Severed Hand",
"Smile",
"Sonic Reducer", 
"Something Special",
"Spin the Black Circle",
"State of Love and Trust",
"Throw Your Arms Around Me", "Tremor Christ",
"Unthought Known",
"Upper Hand",
"Waiting for Stevie",
"Wishlist",
"Why Go",
"Won't Tell",
"Wreckage",
"Yellow Ledbetter"
];

const dateAssignments = [
  ["Given to Fly", "Elderly Woman Behind the Counter in a Small Town", "Why Go", "Corduroy", "React, Respond", "Eruption", "Dark Matter", "Wreckage", "Daughter", "Even Flow", "Won't Tell", "Jeremy", "Quick Escape", "Wishlist", "Not for You", "Spin the Black Circle", "Lukin", "Porch", "Just Breathe", "Habit", "State of Love and Trust", "Hard to Imagine", "Do the Evolution", "Alive", "Rockin' in the Free World" ],  // Songs for Auckland Nov 8th
  ["Release", "Low Light", "Once", "Do the Evolution", "Scared of Fear", "Wreckage", "Waiting for Stevie", "Better Man", "Dance of the Clairvoyants", "Mind Your Manners", "Even Flow", "Amongst the Waves", "Jeremy", "Upper Hand", "Unthought Known", "Black", "Porch", "Throw Your Arms Around Me", "Smile", "Animal", "Rearviewmirror", "Alive", "Rockin' in the Free World", "Yellow Ledbetter" ],  // Songs for Auckland Nov 10th
  ["Corduroy", "Elderly Woman Behind the Counter in a Small Town", "Given to Fly", "Why Go", "Quick Escape", "React, Respond", "Dark Matter", "I Am Mine", "Wreckage", "Even Flow", "I Got Id", "Daughter", "Got to Give", "Severed Hand", "Black", "Porch", "Man of the Hour", "Do the Evolution", "Breath", "Better Man", "Alive", "Rockin' in the Free World" ],  // Songs for Gold Coast Nov 13th
  
  ["Why Go", "Elderly Woman Behind the Counter in a Small Town", "Given to Fly", "Hail, Hail", "Corduroy", "React, Respond", "Dark Matter", "Wreckage", "Garden", "Even Flow", "In My Tree", "Running", "Jeremy", "Wishlist", "Not for You", "Mind Your Manners", "Porch", "Just Breathe", "Inside Job",  "Do the Evolution", "Better Man", "State of Love and Trust", "Alive", "Rockin' in the Free World", "Yellow Ledbetter" ],  // Songs for Melbourne Nov 16th
  
  ["Better Man", "Last Exit", "Given to Fly", "Porch", "Wreckage", "Daughter", "Scared of Fear", "Dark Matter", "Even Flow", "Light Years", "Waiting for Stevie", "Jeremy", "Won't Tell", "Do the Evolution", "Deep", "Black", "Rearviewmirror", "Throw Your Arms Around Me", "Setting Sun", "Animal", "Once", "Unthought Known", "Alive", "Rockin' in the Free World", "Yellow Ledbetter" ],  // Songs for Melbourne Nov 18th
  
  ["Release", "Even Flow", "Given to Fly", "Interstellar Overdrive", "Corduroy", "Nothingman", "Scared of Fear", "Dark Matter", "Wreckage", "Daughter", "Come Back", "Waiting for Stevie", "State of Love and Trust", "Running", "Jeremy", "Faithful", "Lukin", "Porch", "Last Kiss", "Animal", "Do the Evolution", "Black", "Sonic Reducer", "Alive", "Rockin' in the Free World", "Indifference" ], // Songs for Sydney Nov 21th
  ["Garden", "Why Go", "Brain of J.", "In Hiding", "Even Flow", "Tremor Christ", "React, Respond", "Dark Matter", "Elderly Woman Behind the Counter in a Small Town", "Wreckage", "Save You", "Dissident", "Given to Fly", "Hunger Strike", "Immortality", "Rearviewmirror", "No Surrender", "Spin the Black Circle", "Better Man", "Something Special", "Black", "Alone", "Porch", "Alive", "Baba O'Riley", "Yellow Ledbetter", "Little Wing" ]  // Songs for Syndey Nov 23rd
  ];

  let currentIndex = 0;
  let cycleInterval;
  const themeColor1 = '#FB663F';
  const themeColor2 = '#F9CF33';
  const themeColor3 = '#323143';
  const themeColor4 = '#FB663F';
  
  document.documentElement.style.setProperty('--theme-color-1', themeColor1);
  document.documentElement.style.setProperty('--theme-color-2', themeColor2);
  document.documentElement.style.setProperty('--theme-color-3', themeColor3);
  document.documentElement.style.setProperty('--theme-color-4', themeColor4);
  
  // Display all songs in the "song-output" div
  const songOutputHTML = songTitles.map(song => `<li>${song}</li>`).join(' ');
  $('#song-output').html(songOutputHTML);

  function highlightCurrentDate() {
    // Reset all date list items
    $('#highlight-dates li').css({
    'background-color': '',
    'color': ''
});

    // Reset all song titles in #song-output
    $('#song-output li').css('color', '');

    // Highlight the current date
    const $currentDate = $('#highlight-dates li').eq(currentIndex);
    $currentDate.css({
    'background-color': themeColor1,
    'color': '#19191f'
});

    // Highlight songs for the current date
    const assignedSongs = dateAssignments[currentIndex];
    $('#song-output li').each(function() {
      if (assignedSongs.includes($(this).text())) {
        $(this).css('color', themeColor2);
      }
    });
  }

  function startCycle() {
    cycleInterval = setInterval(() => {
      highlightCurrentDate();
      currentIndex = (currentIndex + 1) % dateAssignments.length;
    }, 5000);
  }

  function stopCycle() {
    clearInterval(cycleInterval);
  }

  // Hover behavior for pausing on specific date
  $('#highlight-dates li').on('mouseenter', function() {
    stopCycle(); // Pause the cycling
    currentIndex = $(this).index(); // Set the current index to the hovered date
    highlightCurrentDate(); // Show the songs for the hovered date
  });

  $('#highlight-dates li').on('mouseleave', function() {
    startCycle(); // Resume the cycling
  });

  // Start the initial cycle
  highlightCurrentDate(); // Highlight the first date immediately
  startCycle();
});