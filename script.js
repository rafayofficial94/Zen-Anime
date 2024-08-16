function generateName() {
    const baseName = document.getElementById('baseName').value;
    if (!baseName) {
        alert("Please enter a base name");
        return;
    }

    const prefixes = ["Pro", "Epic", "Noob", "Legend", "Fire", "Ninja", "Shadow", "Ace"];
    const suffixes = ["King", "Master", "Warrior", "Hero", "Champ", "Slayer", "Beast", "Phantom"];
    const symbols = ["✪", "✰", "✵", "❉", "❂", "❄", "❇", "❋"];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const randomSymbol1 = symbols[Math.floor(Math.random() * symbols.length)];
    const randomSymbol2 = symbols[Math.floor(Math.random() * symbols.length)];

    const generatedName = `${randomSymbol1}${randomPrefix}${baseName}${randomSuffix}${randomSymbol2}`;
    document.getElementById('generatedName').innerText = generatedName;
}
