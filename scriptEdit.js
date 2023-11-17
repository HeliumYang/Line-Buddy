var script;
var savefile;

function Script(docType, name) {
    this.name = name;
    this.type = docType;
    this.acts = [];
    this.characters = [];

    this.acts.push(new Act());
    this.acts[0].scenes.push(new Scene());
} // newScript

function Character(name) {
    this.name = name;
    this.alt = [];
} // Character

function Act() {
    this.label = "";
    this.scenes = [];
} // Act

function Scene() {
    this.label = "";
} // Scene

function Line() {

} // Line

function rmChar(name) {
    var charIndex = findCharIndex(name);
    if (charIndex >= 0) {
        rmCharLines(charIndex);
        reorderCharIndex(charIndex);
    } // if

} // rmChar

function findCharIndex(name) {

} // findCharIndex

function rmCharLines(charIndex) {

} // rmCharLines

function reorderCharIndex(charIndex) {
    for (var i = charIndex; i < script.characters.length; i++) {

    } // for
} // reorderCharIndex

function saveScript() {
    var savefile = JSON.stringify(script);
    download("Line_Buddy" + script.name + ".js", savefile);
} // saveScript

function loadScript() {

} // loadScript

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }