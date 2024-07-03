['Devika', 'Mary', 'Jhony', 'Hector'].forEach((varName) => {
    if (varName.length == 4) {
        pm.variables.set("putUserName", varName);
        return; // This exits the forEach loop after setting the variable
    }
});
