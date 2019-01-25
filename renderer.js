const versionEl = document.querySelector('#version');

versionEl.innnerText = process.versions.electron;

console.log(process.versions);


