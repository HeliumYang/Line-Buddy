let script;
var savefile;

function openUpload() {
    document.querySelector("#loadScript").innerHTML = '<a onclick="closeUpload()">Load Script</a><input type="file" id="upload-script">';
    var fileUpload = document.querySelector('#upload-script');
    fileUpload.addEventListener("change", () => {
        let scriptFile = fileUpload.files;
        if (scriptFile.length == 0) return;
    
        const file = scriptFile[0];
 
        let reader = new FileReader();
 
        reader.onload = (e) => {
            const file = e.target.result;
 
            // This is a regular expression to identify carriage 
            // Returns and line breaks
            const lines = file.split(/\r\n|\n/);
            script = lines.join('\n');
            closeUpload();
        };
 
        reader.onerror = (e) => alert(e.target.error.name);
 
        reader.readAsText(file);

    }); // fileUpload event listener
} // openUpload

function closeUpload() {
    document.querySelector("#loadScript").innerHTML = '<a onclick="openUpload()">Load Script</a>'
} // closeUpload

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
    this.starred = false;
    this.notes = "";
} // Character

function Act() {
    this.label = "";
    this.scenes = [];
    this.starred = false;
    this.notes = "";
} // Act

function Scene() {
    this.label = "";
    this.starred = false;
    this.notes = "";
} // Scene

function Line() {
    this.notes = "";
    this.starred = false;
} // Line

function rmChar(name) {
    var charIndex = findCharIndex(name);
    if (charIndex >= 0) {
        rmCharLines(charIndex);
        reorderCharIndex(charIndex);
        rmCharAssociation(charIndex);
        reorderCharAssociation(charIndex);
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

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }