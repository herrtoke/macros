function getTempHP() {
  return actor.data.data.attributes.hp.temp;
}

function setTempHP(modHP) {
  let tempHP = getTempHP();
//  let tempHP = actor.data.data.attributes.hp.temp;
  console.log(tempHP);
  if (!tempHP) { tempHP = 0; }
  console.log(tempHP);

  modHP += tempHP;

  actor.data.data.attributes.hp.temp = modHP;

  console.log(modHP);
}

new Dialog({
    title: "Add Temp HP",
    content:
     "<p>Current Temporary Hit Points: " + getTempHP() + "</p><p>Enter Temporary Hit Point Adjustment</p><center><input type='number' id='temp-HP'></center><br>",
    buttons: {
        submit: {
            label: "Adjust",
            icon: '<i class="fas fa-submit"></i>',
            callback: () => {
              const temp_HP = parseInt(
                eval(
                  $("#temp-HP")
                  .val()
                )
              );              
              if (temp_HP) { setTempHP(temp_HP); }
            },
        },
     },
}).render(true);
