import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleBody() {
      if (event.target.classList.contains('not-selected')) {
        event.target.classList.remove("not-selected");
        event.target.classList.add("selected");
      } else if (event.target.classList.contains("selected")) {
        event.target.classList.remove("selected");
        event.target.classList.add("not-selected");
      }
    }
  }

});
