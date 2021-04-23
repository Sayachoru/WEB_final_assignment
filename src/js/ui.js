function buildCardForObservation(observation) {
  var divContainer = document.createElement("div");
  divContainer.setAttribute("class", "card");
  divContainer.id = observation.id;
  divContainer.appendChild(cardImg(observation.photoUrl));
  divContainer.appendChild(
    cardBody(
      observation.name,
      observation.date,
      observation.uri,
      observation.wikipedia_url
    )
  );
  divContainer.appendChild(
    cardIcons(
      observation.isNative,
      observation.isIntroduced,
      observation.isThreatened,
      observation.isEndangered
    )
  );
  return divContainer;
}

function clearAllCards() {
  document.getElementById("observation-cards").innerHTML = "";
}

function cardImg(url) {
  var divContainer = document.createElement("div");

  var urlMed = url.replace("square", "medium");
  var style = "background-image: url('" + urlMed + "');";

  divContainer.setAttribute("class", "card-img");
  divContainer.setAttribute("style", style);

  divContainer.innerHTML = "&zwnj;";

  return divContainer;
}

function cardBody(name, date, uri, wikipediaUrl) {
  var divContainer = document.createElement("div");
  divContainer.setAttribute("class", "card-body");

  month = date.getDay() + 1;
  year = date.getYear() - 100 + 2000;
  date = "" + month + "/" + date.getDate() + "/" + year;

  var linkh3 = document.createElement("a");
  // var linkh3 = createAnchor(wikipediaUrl, name);

  var linkh4 = document.createElement("a");

  var header3 = document.createElement("h3");
  var header4 = document.createElement("h4");

  var txtName = document.createTextNode(name);
  // linkh3.href=wikipediaUrl;
  linkh3.setAttribute("href", wikipediaUrl);
  linkh3.appendChild(txtName);
  header3.appendChild(linkh3);
  divContainer.appendChild(header3);

  linkh4.href = uri;
  var txt = document.createTextNode(date);
  linkh4.appendChild(txt);
  header4.appendChild(linkh4);
  divContainer.appendChild(header4);

  return divContainer;
}
/*
function cardBody(name, date, uri, wikipediaUrl) {
  var div = document.createElement("div");
  div.setAttribute("class", "card-body");

  var text = createAnchor(wikipediaUrl, name);
  var h3 = document.createElement("h3");
  h3.appendChild(text);
  div.appendChild(h3);

  var content = createAnchor(uri, date.toISOString().slice(0, 10));
  var h4 = document.createElement("h4");
  h4.appendChild(content);
  div.appendChild(h4);

  return div;
}
*/

function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  var divContainer = document.createElement("div");
  divContainer.setAttribute("class", "card-icons");

  if (isNative) {
    var native = document.createElement("i");
    native.setAttribute("class", "fas fa-leaf");
    divContainer.appendChild(native);
  }

  if (isIntroduced) {
    var introduced = document.createElement("i");
    introduced.setAttribute("class", "fas fa-frog");
    divContainer.appendChild(introduced);
  }

  if (isThreatened) {
    var threatened = document.createElement("i");
    threatened.setAttribute("class", "fas fa-radiation-alt");
    divContainer.appendChild(threatened);
  }

  if (isEndangered) {
    var endangered = document.createElement("i");
    endangered.setAttribute("class", "fas fa-skull-crossbones");
    divContainer.appendChild(endangered);
  }

  return divContainer;
}

function updateCardsTitle(title) {
  // TODO
  var node = document.querySelector("#cards-title");
  document.querySelector("#cards-title").innerHTML = "";
  var text = document.createTextNode(title);
  node.appendChild(text);
}

function updateTitle(text) {
  const title = document.querySelector("#observation-title > span");
  title.innerText = text;
}

function addCards(card) {
  // TODO
  var cards = document.getElementById("observation-cards");
  cards.appendChild(card);
}

// Given a URL src string and alt text string, create an <img> element and return:
// <img src="https://static.inaturalist.org/photos/109319291/square.jpg?1609877680" alt="Muskrat">
function createImg(src, alt) {
  // TODO
  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  return img;
}

// Given a string of text, create and return a TextNode
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
function createText(text) {
  // TODO
  txt = document.createTextNode(text);
  return txt;
}

// create and return an anchor element.
// <a href="http://en.wikipedia.org/wiki/Muskrat">Muskrat</a>.  NOTE:
// The innerContent will be a TextNode or HTML Img Element (i.e., it
// won't be simple text).
function createAnchor(href, innerContent) {
  // TODO
  var a = document.createElement("a");
  a.setAttribute("href", href);
  a.appendChild(innerContent);
  return a;
}

// Return a proper time element with its dateTime property set:
// <time datetime="2020-09-18">2020-09-18</time>
function createTime(formatted) {
  // TODO
  var time = document.createElement("time");
  time.setAttribute("datetime", formatted);
  var txt = document.createTextNode(formatted);
  time.appendChild(txt);
  return time;
}

// Given a boolean value (true/false) return a string "Yes" or "No"
function toYesNo(value) {
  // TODO
  if (value) {
    return "Yes";
  }
  return "No";
}

// Converts an Observation object into DOM nodes that produce the following HTML:
//
//  <tr id="67868131">
//    <td>
//      <a href="https://www.inaturalist.org/observations/67868131">
//        <img
//          src="https://static.inaturalist.org/photos/109319291/square.jpg?1609877680"
//          alt="Muskrat">
//      </a>
//    </td>
//    <td>
//      <time datetime="2020-09-18">2020-09-18</time>
//    </td>
//    <td>
//      <a href="http://en.wikipedia.org/wiki/Muskrat">Muskrat</a>
//    </td>
//    <td>No</td>
//    <td>Yes</td>
//    <td>No</td>
//    <td>No</td>
//  </tr>
//
// Things to note in your solution:
//
// - Give the table row an id, using the observation's id
// - Create an anchor so you can click the photo and go to the observation's uri
// - Use the observation's name as the alt text of the image, and photoUrl as its src
// - Use a proper <time> element, and format the observation's date using a locale aware format, see
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// - Use the observation's wikipediaUrl to provide a link when you click the name
// - Convert all the boolean values for endangered, native, threatened, introduced to "Yes" or "No" strings
function buildCardForObservation(observation) {
  // 1. Create the row for this observation with correct id: <tr id="67868131">...</tr>
  card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", observation.id);

  card.appendChild(cardImg(observation.photoUrl));
  card.appendChild(
    cardBody(
      observation.name,
      observation.date,
      observation.uri,
      observation.wikipediaUrl
    )
  );
  card.appendChild(
    cardIcons(
      observation.isNative,
      observation.isIntroduced,
      observation.isThreatened,
      observation.isEndangered
    )
  );
  return card;
}

function toggleLoading(isLoading) {
  // TODO: toggle the state of the Search button.
  // When we click 'Search' we need to indicate to the user
  // that we're doing something (i.e., that we're Loading...).
  // We also need to change the icon from a search magnifying glass to an hourglass.
  // Finally, we need to disable the button, so the user doesn't click it multiple
  // times (i.e., we need to wait until the loading finishes).  We decide what to
  // do based on the value of the isLoading argument.

  butt = document.querySelector('#search_submit');
  if (isLoading) {
    butt.setAttribute("disabled", "disabled");
    butt.innerHTML = "<i class='fas fa-search'> Loading…</i>";
  }
  else {
    butt.removeAttribute("disabled");
    butt.innerHTML = "<i class='fas fa-search'> Search</i>";
  }
}