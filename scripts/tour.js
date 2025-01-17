// Methods pertaining to the Tour de CensOculus
// See arrowKeyFix.js also

// The pre-tour starts on slide -1
let currentTourSlide = -1;

// Move from slide to slide by way of the arrow keys
const moveTourWithArrow = e => {
  if (e.which == 39 && currentTourSlide > -1) { // right arrow
    currentTourSlide++;
    takeTour(currentTourSlide);
  } else if (e.which == 37 && currentTourSlide > 0) { // left arrow
    currentTourSlide--;
    takeTour(currentTourSlide);
  }
}

// Add listener for arrow key presses on tour
document.addEventListener('keydown', moveTourWithArrow);

// Close tour window
// Sets currentTourSlide to -1 in case tour needs to be restarted
const closeTour = () => {
  $('#tour-window').css('left','410px').css('top','-1000px');
  currentTourSlide = -1;
}

// Opens the tour, starts on slide number of provided argument
const takeTour = async(n) => {
  closeTour();
  closeAllNavs();
  $('#tour-window').css('left','410px').css('top','5px');

  // Someone please find a better way of doing this, I am brain-dead
  if (n == 0) tour0(); if (n == 1) tour1(); if (n == 2) tour2(); if (n == 3) tour3(); if (n == 4) tour4(); if (n == 5) tour5();
  if (n == 6) tour6(); if (n == 7) tour7(); if (n == 8) tour8(); if (n == 9) tour9(); if (n == 10) tour10();
  if (n == 11) tour11(); if (n == 12) tour12(); if (n == 13) tour13(); if (n == 14) tour14(); if (n == 15) tour15();
  if (n == 16) tour16(); if (n == 17) tour17(); if (n == 18) tour18(); if (n == 19) tour19(); if (n == 20) tour20();
};

const tour0 = async() => {
  currentTourSlide = 0;
  $('#tour-text').html(
        `<div>
          <span style="font-size:1.4em; text-align:center;">Welcome to the United States of America!</span>
        </div>
        <div>
          <span style="font-size:1.0em; font-weight:600; color:#666;">Home of baseball, apple pie, and 22% of the world's incarcerated population.</span>
        </div>
        <div style="padding-top:7px;">
          <span class="tour-text-style">
            Every ten years, the United States conducts a Census to count its population.<br>
            In 2020, the U.S. population was <span style="font-size:1.25em; color:darkblue">331,449,281</span> people <span style="color:#666">(~4% of the world total)</span>
          </span>
        </div>
        <div style="padding-top:8px;">
          <span class="tour-text-style">
            <span style="color:#551a8b; font-size: 1.1em"><b>CensOculus</b></span> is a tool for visualizing these Census results, let's see how it works!
          </span>
        </div>
        <div style="padding-top:8px;">
          <span class="tour-text-style">
            The current map shows the <b><span style="color:darkred;">population in each of the 50 states</span> (+ D.C. and P.R.)</b>
            <div style="padding-top:8px;"></div>
            <span style="color:darkgreen"><b>Hover</b></span> over a state to view its population, or <span style="color:#C71585"><b>click</b></span> on one to learn a bit more!
          </span>
        </div>
        <div style="padding-top:8px;">
          <span class="tour-text-style">
            You can also <span style="color:#dd5f30"><b>select multiple states</b></span> at once to learn about a larger area. For this, click on the
            &nbsp<img src="images/plus.png" width="20" height="20" style="position: relative; top:4px;">&nbsp
            button on the left, then select as many states as you want!
          </span>
        </div>
        <div>
          <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
        </div>
        <div style="padding-top:6px; position: relative; left:253px;">
          <span style="color:#666"><i>Click, or use the arrow keys to continue</i></span>
          &nbsp&nbsp
          <img src="images/arrow-right.png" height="16" style="position: relative; top: 3px;" onclick="tour1()">
        </div>`
)
  await updateMapFromToken(default_token);
  full52View();
}

const tour1 = async() => {
  currentTourSlide = 1;
  full52View();
  nativelandStart();
  $('#move-window').css('left','3000px')
  $('#tour-text').html(
      `      <div>
              <span style="font-size:1.4em; text-align:center;">Land Acknowledgement</span>
            </div>
            <div style='padding-top: 2px; font-weight:600; color:#666;'>
              <i>This map was made while occupying the stolen land of the Duwamish, Coast Salish, Nacotchtank, and others of the mid-Atlantic and Pacific Northwest.</i>
            </div>
              <span class="tour-text-style">
                <div style="padding-top:6px;">
                  Human beings have lived in North America for <span style="color:darkgreen; font-weight:900;">more than 120,000 years</span>;
                  creating a cultural history that is both vibrant and diverse.
                  Ancestral historians estimate that <span style="color:darkgreen; font-weight:900;">tens of thousands of unique groups</span> lived here during that time.
                </div>
                <div style="padding-top:8px;">
                  Indigenous Americans lived predominantly in hunter-gatherer groups with loosely-defined territory that was ever-changing.
                  The current <span style="color:darkgreen; font-weight:900;">map shows the territory of many of the tribes</span> that lived here during the last millennium.
                  This data was borrowed from <a href='https://native-land.ca/' target="_blank">Native-Land.ca</a>,
                  please visit and support their site to learn about the territory, languages, and treaties of Native peoples. <br>
                </div>
              </span>
            <div>
              <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
            </div>
            <div style="padding-top:6px;">
              <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour0()">
              <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour2()">
            </div>`
          )
}

const tour2 = async() => {
  currentTourSlide = 2;
  nativelandStart();
  full52View();
  $('#move-window').css('left','3000px')
  $('#tour-text').html(
      `      <div>
              <span style="font-size:1.4em; text-align:center;">Land Acknowledgement</span>
            </div>
            <div style='padding-top: 2px; font-weight:600; color:#666;'>
            <i>This map was made while occupying the stolen land of the Duwamish, Coast Salish, Nacotchtank, and others of the mid-Atlantic and Pacific Northwest.</i>
            </div>
              <span class="tour-text-style">
                <div style="padding-top:6px;">
                  The United States and its decennial census have existed for less than 250 years,
                  about <span style="color:darkgreen; font-weight:900;">0.2%</span>
                   (or <span style="color:darkgreen; font-weight:900;">1/400<sup>th</sup></span>) of the time that humans have lived here.
                  To properly understand the context of the Census, it must be remembered that the United States
                  was built (very recently!) on <span style="color:darkgreen; font-weight:900;">stolen land with stolen lives and resources</span>.
                </div>
                <div style="padding-top:8px;">
                  Although the Census has made progress over time, it is still rife with inequities.
                  In 2010, the Census Bureau estimated that Native populations living on reservations or in Native villages were <span style="color:darkgreen; font-weight:900;">undercounted by almost 5%</span>.
                  That is <span style="color:darkgreen; font-weight:900;">more than double the undercount rate</span> of the next closest population group.
                  Considering the shortened timeline for the 2020 Census, due to COVID-19, the <span style="color:darkgreen; font-weight:900;">undercount rate will likely be far higher this time around</span>.
                </div>
              </span>
            <div>
              <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
            </div>
            <div style="padding-top:6px;">
              <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour1()">
              <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour3()">
            </div>`
          )
}

const tour3 = async() => {
  currentTourSlide = 3;
  nativelandEnd();
  $('#tour-text').html(
      `      <div>
              <span style="font-size:1.4em; text-align:center;">Basic Data Settings</span>
            </div>
            <div style="padding-top:4px;">
              <span class="tour-text-style">
                While the founding principle of the Census was a simple population count,<br> today the Census Bureau collects
                <span style="color:#2E8B57"><b>data in dozens of categories</b></span>.<br>
                <div style="padding-top:5px;"></div>
                For the next decade, private businesses and governments alike will use this data to
                <span style="color:#483d8b"><b>place hospitals, </b></span>
                <span style="color:#800000"><b>distribute services, </b></span>
                <span style="color:#800080"><b>analyze the economy, </b></span>
                and much more.
              </span>
              <div style="padding-top:4px;">
                To view data other than population, click the
                <span style="cursor:pointer;" onclick="openNav(3);">
                  <span style="font-size:1.1em; color:#22222"><b>
                  <img src="images/gear.png" width="24" height="24" style="position: relative; top:5px;"> Data
                </span>
                </b></span>button on the left. Inside the sidebar there are controls to change what data gets applied to the map.

              </div>
              <div style="padding-top:6px;">
                <span class="tour-text-style">
                  You can adjust the
                  <span style="color:#dd6000"><b>Year</b></span>
                  to see the results from previous censuses (2000, 2010).
                  <div style="padding-top:6px;">
                  Or try changing the
                  <span style="color:#dd6000"><b>Geography</b></span>
                  to view other ways of partitioning the country.
                  <div style="padding-top:1px;"></div>
                  <span style="color:#666"><i>For smaller geographies, make sure you are zoomed in enough to load the map.</i></span>
                </span>
              </div>
              <div style="padding-top:6px;">
                <span class="tour-text-style">
                  By selecting the
                  <span style="color:#dd6000"><b>Realm</b></span>,
                  you can choose what general data category to map, this includes things like Race, Ethnicity, Age, Sex, Housing, etc.
                </span>
              </div>
              <div style="padding-top:6px;">
                <span class="tour-text-style">
                  The
                  <span style="color:#dd6000"><b>Concept</b></span>
                  is a sub-category of Realm, and below Concept is the
                  <span style="color:#dd6000"><b>Variable</b></span>.
                </span>
              </div>
              <div style="padding-top:8px;">
                <span class="tour-text-style">
                  Try adjusting these settings yourself, or move on to see an example...
                </span>
              </div>
                <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
              </div>
              <div style="padding-top:6px;">
                <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour2()">
                <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour4()">
              </div>
            </div>`
)
}

const tour4 = async() => {
  currentTourSlide = 4;
  $('#tour-text').html(`<div>
    <span style="font-size:1.4em; text-align:center;">Example:&nbsp<b>Black Population Percentage by State</b></span><br>
    <div style='font-weight:600; font-size: 0.97em; color:#666;'>
      Maps may take a second to load, just wait for the
      &nbsp
      <div id='loading-3' class="loader" style="display: inline-block; position: relative; top: 4px; left: 0px; border: 5px solid #f3f3f3; border-top: 5px solid #be66d1; width: 11px; height: 11px;"></div>
      &nbsp
      icon (to the left) to go away
    </div>
  </div>
  <div style="padding-top:6px;">
    <span class="tour-text-style">
      The current map (once loaded) shows the percentage of residents in each state who self-identify their race as
      <span style="color:#7F58AF"><b>Black or African American</b></span>.
    </span>
  </div>
  <div style="padding-top:6px;">
    <span class="tour-text-style">
      The <span style="color:#3d88a6;"><b>demographic effects of slavery</b></span> are still clearly visible in the South today.
    </span>
  </div>
  <div style="padding-top:8px;">
    <span class="tour-text-style">
      <span style="color:#C71585"><b>Clicking</b></span> on a state will now show you data for other races as well.
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour3()">
    <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour5()">
  </div>
  </div>`)
  await updateMapFromToken(`{"Year":"10", "Geo":"state", "Realm":"Race", "Concept":"P6", "Variable":"P006003P", "3D":false, "Height":100000, "Scheme":"Viridis", "Scale":"Linear", "TileOpacity":0.5, "NumFormat":"comma", "Accumulate":false, "FlagMode":false, "WikiMode":false, "Center":{"lng":-102, "lat":38.1443799}, "Zoom":3.6165, "Pitch":0, "Bearing":0}`)
  lower48View();
}

const tour5 = async() => {
  currentTourSlide = 5;
  SETTINGS["Geo"] = 'county';
  distributeSettings();
  update();
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">Example:&nbsp<b>Black Population Percentage by County</b></span>
  </div>
  <div style="padding-top:4px;">
    <span class="tour-text-style">
      It is important to realize that <span style="color:purple"><b>states are not mono-demographic</b></span>.
      Each state is home to a complex mix of peoples, cultures, and communities.
      To understand the demographics of a large area, we must often consider it in smaller pieces.
      <div style="padding-top:8px;"></div>
      By viewing <span style="color:darkgreen"><b>counties, rather than states</b></span>, we can now see the South's
      <a href="https://en.wikipedia.org/wiki/Black_Belt_in_the_American_South" target="_blank" style="font-weight:800;">Black Belt</a>.
      This region of highly fertile soil was coveted by White plantation owners who bought
      <a href="https://en.wikipedia.org/wiki/Slavery_in_the_United_States" target="_blank" style="font-weight:800;">slaves by the millions</a>
      to work the fields. While de jure slavery ended in 1865, these areas have retained many of their demographic characteristics.
      <div style="padding-top:8px;"></div>
      Clearly, the Black Belt does not strictly adhere to state boundaries. While states have strict borders, people do not.
      Each state has a wide range of demographic and cultural characteristics that cannot be fully explained by any map or data.
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour4()">
    <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour6()">
  </div>
`);
}

const tour6 = async() => {
  currentTourSlide = 6;
  SETTINGS["Geo"] = 'tract';
  distributeSettings();
  update();
  blackBeltView();
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">Example:&nbsp<b>Black Population Percentage by Tract</b> </span>
  </div>
  <div style="padding-top:4px;">
    <span class="tour-text-style">
      Smaller than counties, <span style="color:#6c1478"><b>Census Tracts</b></span> provide a detailed view of the Black Belt.
      Here are some of the only rural areas in the country with a Black racial majority.
      <div style="padding-top:8px;"></div>
      Demographic maps are powerful because they are also
      <span style="color:#A16F0A"><b>maps of history</b></span>.
      <div style="padding-top:8px;"></div>
      This map alone shows many residual effects from
      <a href="https://en.wikipedia.org/wiki/Slavery_in_the_United_States" target="_blank" style="font-weight:800;">slavery</a>,
      <a href="https://en.wikipedia.org/wiki/Reconstruction_era" target="_blank" style="font-weight:800;">the Reconstruction</a>,
      <a href="https://en.wikipedia.org/wiki/Great_Migration_(African_American)" target="_blank" style="font-weight:800;">the Great Migration</a>,
      <a href="https://en.wikipedia.org/wiki/Black_flight" target="_blank" style="font-weight:800;">Black flight</a>,
      <a href="https://en.wikipedia.org/wiki/West_Indian_Americans" target="_blank" style="font-weight:800;">Caribbean immigration</a>, and much more.
      <div style="padding-top:8px;"></div>
      By changing the <span style="color:#dd6000"><b>Geography</b></span>, new insights can be made about the data that would have been otherwise impossible.
      There are many different geography options to choose from under&nbsp
      <img src="images/gear.png" width="20" height="20" style="position: relative; top:4px;">
      <span style="font-size:1.0em; font-weight:600; color:#555;">Data > Geography</span>
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour5()">
    <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour7()">
  </div>
`)
}

const tour7 = async() => {
  await updateMapFromToken(`{"Year":"10", "Geo":"state", "Realm":"Total", "Concept":"P1", "Variable":"P001001D", "3D":false, "Height":100000, "Scheme":"Viridis", "Scale":"Quartile", "TileOpacity":0.5, "NumFormat":"comma", "Accumulate":false, "FlagMode":false, "WikiMode":false, "Center":{"lng":-104.8, "lat":38.85}, "Zoom":3.6, "Pitch":0, "Bearing":0}`);
  currentTourSlide = 7;
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">More on Data Selection</span>
  </div>
  <div style="padding-top:4px;">
    <span class="tour-text-style">
      So far, we have changed the geography of the map, <b>but not the data itself</b>.<br>
      Settings to change the mapped data can be found in the
      <img src="images/gear.png" width="20" height="20" style="position: relative; top:4px;">
      <b>Data</b> sidebar.
      <div style="padding-top:8px;"></div>
      The <span style="color:#dd6000; font-size:1.1em;"><b>Realm</b></span> is the broadest category of data classification.
      With the Realm, you can select what <span style="color:#22208c"><b>general topic</b></span> you are interested in.
      The Realm determines what Concepts and Variables are available, so be sure to select the Realm first.
      <div style="padding-top:8px;"></div>
      Next, you can select the <span style="color:#dd6000; font-size:1.1em;"><b>Concept</b></span>.
      These are narrower in scope than Realms, as each Concept points to a <span style="color:#22208c"><b>specific topic</b></span>, rather than a broad one.
      <div style="padding-top:0px;"></div>
      <span style="color:#666"><i>Due to crossover topics, the same Concept may appear under multiple Realms.</i></span>
      <div style="padding-top:8px;"></div>
      Last to be selected is the <span style="color:#dd6000"; font-size:1.1em;><b>Variable</b></span>; the specific value of the Concept that
      will be applied to the map. Variables represent the <span style="color:#22208c"><b>actual tabulated Census values</b></span> and their percentages.
      In all, the Census counts almost 10,000 variables!
      <div style="padding-top:8px;"></div>
      <span style="color:#666"><i>Current Map: population density by state, colored with a Logarithmic scale.</i></span>
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour6()">
    <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour8()">
  </div>
`)
}

const tour8 = async() => {
  currentTourSlide = 8;
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">Example:&nbsp<b>% Hispanic Population in L.A. by Tract</b></span>
  </div>
  <div>
    <span class="tour-text-style">
      <div style='padding-top:5px;'>
        Here is another example, arrived at using the options in the
        <img src="images/gear.png" width="20" height="20" style="position: relative; top:4px;">&nbsp
        <b>Data</b> sidebar.
        This map shows the <span style="color: darkmagenta; font-weight:800;">percentage of the population with Hispanic ethnicity</span>, mapped by Census Tract.
        To get here, we adjusted the <b>Data Settings</b> with: <br>
        <div style='padding-top:6px;'></div>
        &nbsp&nbsp&nbsp&nbsp&nbsp•&nbsp&nbsp
        <span style="color:#dd6000"><b>Geography</b></span> <b>> Tract</b> <br>
        <div style='padding-top:3px;'></div>
        &nbsp&nbsp&nbsp&nbsp&nbsp•&nbsp&nbsp
        <span style="color:#dd6000"><b>Realm</b></span> <b>> Ethnicity</b> <br>
        <div style='padding-top:3px;'></div>
        &nbsp&nbsp&nbsp&nbsp&nbsp•&nbsp&nbsp
        <span style="color:#dd6000"><b>Concept</b></span> <b>> Hispanic and Latino Origin</b> <br>
        <div style='padding-top:3px;'></div>
        &nbsp&nbsp&nbsp&nbsp&nbsp•&nbsp&nbsp
        <span style="color:#dd6000"><b>Variable</b></span> <b>> % Hispanic and Latino</b> <br>
      </div>
      <div style='padding-top:5px;'>
        Since the options per category change depending on the other selections,
        it is important to <b>
        <span style="color:#1f9898">pick Realm first,</span>
        <span style="color:#046865">then Concept,</span> </b>and<b>
        <span style="color:#365f92">finally Variable</b></span>.
      </div>
      <div style='padding-top:6px;'>
        Try using the options in the
        <span style="cursor:pointer;" onclick="openNav(3);">
          <img src="images/gear.png" width="20" height="20" style="position: relative; top:3px;">
          <b>Data</b>
        </span>
        sidebar to create a map of your own. There are millions of unique maps to be made, so get crackin'!
      </div>
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour7()">
    <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour9()">
  </div>
`)
  await updateMapFromToken(`{"Year":"10", "Geo":"tract", "Realm":"Ethnicity", "Concept":"P4", "Variable":"P004003P", "3D":false, "Height":100000, "Scheme":"Viridis", "Scale":"Linear", "TileOpacity":0.5, "NumFormat":"comma", "Accumulate":false, "FlagMode":false, "WikiMode":false, "Center":{"lng":-118.14, "lat":33.9635761}, "Zoom":8.4416, "Pitch":0, "Bearing":0}`)
}

const tour9 = async() => {
  currentTourSlide = 9;
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">Using the Color Settings </span>
  </div>
  <div>
    <span class="tour-text-style">
      To change the look or feel of the map, try opening the&nbsp
      <span style="cursor:pointer;" onclick="openNav(4);">
        <img src="images/colors.png" width="20" height="20" style="position: relative; top:4px;">
        <b>Colors</b> sidebar.
      </span>
      <div style="padding-top:8px;">
        Under <span style="color:darkred"><b>Scheme</b></span>, you can change the color scheme for the tiles on the map. <br>
        There are many different choices to explore, including color blind safe options. <br>
      </div>
      <div style="padding-top:8px;">
        You can also <span style="color:#dd6000"><b>Invert</b></span> the color scheme, which reverses the order of colors.
      </div>
      <div style="padding-top:8px;">
        The <span style="color:darkblue"><b>Scale</b></span> is another useful feature for understanding the data.
        By default, the color stops are implemented <span style="color:teal"><b>Linearly</b></span>,
        meaning each color stop is equally spaced along the range of the data.
        With <span style="color:teal"><b>Quartile</b></span> scaling, the color stops are placed
        at the data quartiles (Minimum, 1st Q, Median, 3rd Q, Maximum).
        The Scale can be set to <span style="color:teal"><b>Log</b></span>, where the stops are placed logarithmically.
      <div>
      <div style="padding-top:8px;">
        Careful use of the <span style="color:darkblue"><b>Scale</b></span> setting can be helpful
        in a similar manner as changing the <b>Geography</b>;
        by providing new perspective for the same set of data. Beware that the scale can take a moment to load with small geographies, so be patient!
      </div>
      <div style="padding-top:8px;">
        Within the
        <span style="cursor:pointer;" onclick="openNav(4);">
          <img src="images/colors.png" width="20" height="20" style="position: relative; top:4px;">
          <b>Colors</b>
        </span>
        sidebar are more options for customizing the tile opacity, border width, and more.
        Try these out to make a map that is all your own!
      </div>
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour8()">
    <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour10()">
  </div>
`)
}

const tour10 = async() => {
  currentTourSlide = 10;
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">Save Your Map for Later</span>
  </div>
  <div>
    <span class="tour-text-style">
      Maps can be saved by copying the token in the
      <span style="cursor:pointer;" onclick="openNav(7);">
        <img src="images/save.png" class="icon-img" width="20" height="20" style="position: relative; top:3px;">
        <b>Save Map</b> sidebar.
      </span>The token contains the information needed to recreate the map, including the settings for data, color, map position, and more.
      <span style="color:purple;"><b>Be sure to keep your token in a safe place!</b></span>
		<div style="padding-top:8px"></div>
      To open a saved map, paste a token in the
      <span style="cursor:pointer;" onclick="openNav(7);">
        <img src="images/save.png" class="icon-img" width="20" height="20" style="position: relative; top:3px;">
        <b>Save Map</b> sidebar,
        </span>and click <b>Go</b>.
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour9()">
    <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour11()">
  </div>
`)
}

const tour11 = async() => {
  currentTourSlide = 11;
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">Apply a Filter</span>
  </div>
  <div style="padding-top:4px;">
    <span class="tour-text-style">
      Adjust the
      <span style="cursor:pointer;" onclick="openNav(6);">
        <img src="images/filter.png" width="20" height="20" style="position: relative; top:4px;">
        <b>Filter</b>
      </span>
       settings to hide tiles based on geography or data value.
      <div style="padding-top:6px;">
      Tiles can be <b><span style="color:#dd6000">filtered by state and county</span></b>*, using the <b>dropdown menus</b>. <br>
      <span style="color:#666; font-style:italic;">
        *Only works for geographies that strictly adhere to state/county boundaries.
        E.g. you cannot filter for all zip codes in a state, since zip codes can cross state lines.
      </span>
      </div>
      <div style="padding-top:4px;">
        Or use the <b>text box</b> to filter tiles whose <b><span style="color:#dd6000">GEOID starts with the entered value.</span></b>
      </div>
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
  <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour10()">
  <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour12()">
  </div>
`)
}

const tour12 = async() => {
  currentTourSlide = 12;
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">Other Miscellaneous Settings</span>
  </div>
  <div>
    <span class="tour-text-style">
    Clicking the
    <span style="cursor:pointer" onclick="openNav(5)">
    <img src="images/advanced.png" width="20" height="20" style="position: relative; top:4px;"> <b>Experimental</b>
    </span>
    button will open yet another settings panel. This one is home to all the fun stuff that doesn't have a home anywhere else.
    <div style="padding-top: 4px"></div>
    Be sure to try out <span style="color:darkred"><b>Flag Mode</b></span> for states, counties, and places! 🏳️‍🌈  🏴‍☠️  🏴󠁵󠁳󠁴󠁸󠁿
    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour11()">
    <img src="images/arrow-right.png" height="16" style="position: relative; left:510px;" onclick="tour13()">
  </div>
`)
}

const tour13 = async() => {
  currentTourSlide = 13;
  $('#tour-text').html(`
  <div>
    <span style="font-size:1.4em; text-align:center;">More Tour Coming Soon 🙃</span>
  </div>
  <div style="padding-top:4px;">
    <span class="tour-text-style">

    </span>
  </div>
  </div>
    <img src="images/x.png" width="20" height="20" style="position: absolute; top:12px; left:560px;" onclick="closeTour();">
  </div>
  <div style="padding-top:6px;">
    <img src="images/arrow-left.png" height="16" style="position: relative;" onclick="tour12()">
  </div>
`)
}
