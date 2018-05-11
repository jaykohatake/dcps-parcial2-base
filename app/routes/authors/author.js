import Route from '@ember/routing/route';

export default Route.extend({

  model({id}){
    const author = this.modelFor('authors');
    const authors = author.findBy('id', id);
    const posts = author.get('posts');
    const authorName = authors.get('userName');

    if(!authors){
      this.transitionTo('authors');
    }else {
      return{
        authors,
        posts,
        authorName,

      };
    }
  }
});
