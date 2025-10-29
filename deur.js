class Deur {
  #opSlot;
  #deuropening;
  #deurNaam;

  constructor(deurNaam) {
    this.#opSlot = true;       // The door starts locked
    this.#deuropening = false; // The door starts closed
    this.#deurNaam = deurNaam; // The given name of the door
  }

  // Use the key (to the left = unlock, to the right = lock)
  sleutelGebruiken(richting) {
    switch (richting) {
      case "links":
        this.#opSlot = false;
        return "De deur is ontgrendeld.";
      case "rechts":
        this.#opSlot = true;
        return "De deur is op slot gedraaid.";
      default:
        return "Onbekende richting! Gebruik 'links' of 'rechts'.";
    }
  }

  // Try to open the door
  deurOpenen() {
    if (this.#opSlot) {
      return "De deur is op slot! Je kunt de klink niet gebruiken.";
    }
    if (this.#deuropening) {
      return "De deur is al open.";
    }
    this.#deuropening = true;
    return "De deur is nu open.";
  }

  // Try to walk through the door 
  doorDeurLopen() {
    if (this.#opSlot) {
      return "Je stoot tegen de deur, hij is op slot!";
    }
    if (!this.#deuropening) {
      return "De deur is dicht, je stoot nogsteeds tegen de deur slimme!";
    }
    return `Je loopt door de deur '${this.#deurNaam}'.`;
  }
}

export default Deur;
