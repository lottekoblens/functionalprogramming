fetch("data.json")
  .then(response => response.json())
  .then(json => {
    console.log(json);

    // console.log(json[2]['Wat is je favoriete windrichting?']);

    const objecten = Object.keys(json);
    const old_key = 'Wat is je favoriete windrichting?';
    const new_key = 'windrichting';
    const windrichtingen = [];

    for (let i = 0; i < json.length; i++) {
      if (old_key !== new_key) {
        Object.defineProperty(
          json[i],
          new_key,
          Object.getOwnPropertyDescriptor(json[i], old_key)
        );
        delete json[i][old_key];
        console.log(json[i].windrichting);
      }
    }
    for (let i = 0; i < json.length; i++) {
      windrichtingen.push(json[i].windrichting)
    }

  })

