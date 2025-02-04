import { Component } from '@angular/core';
import { recipeCard } from '../../core/interfaces/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  recipes: recipeCard[] = [
    {
      publisher: '101 Cookbooks',
      title: 'Best Pizza Dough Ever',
      source_url: 'http://www.101cookbooks.com/archives/001199.html',
      recipe_id: '47746',
      image_url:
        'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
      social_rank: 100,
      publisher_url: 'http://www.101cookbooks.com',
    },
    {
      publisher: 'The Pioneer Woman',
      title: 'Deep Dish Fruit Pizza',
      source_url: 'http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/',
      recipe_id: '46956',
      image_url: 'http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg',
      social_rank: 100,
      publisher_url: 'http://thepioneerwoman.com',
    },
    {
      publisher: 'Closet Cooking',
      title: 'Pizza Dip',
      source_url: 'http://www.closetcooking.com/2011/03/pizza-dip.html',
      recipe_id: '35477',
      image_url:
        'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
      social_rank: 99.99999999999994,
      publisher_url: 'http://closetcooking.com',
    },
    {
      publisher: 'Closet Cooking',
      title: 'Cauliflower Pizza Crust',
      source_url:
        'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
      recipe_id: '41470',
      image_url:
        'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
      social_rank: 99.9999999999994,
      publisher_url: 'http://closetcooking.com',
    },
    {
      publisher: 'Closet Cooking',
      title: 'Pizza Quesadillas',
      source_url:
        'http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html',
      recipe_id: '35478',
      image_url:
        'http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg',
      social_rank: 99.99999999999835,
      publisher_url: 'http://closetcooking.com',
    },
    {
      publisher: 'Two Peas and Their Pod',
      title: 'Sweet Potato Kale Pizza',
      source_url:
        'http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/',
      recipe_id: '54454',
      image_url:
        'http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg',
      social_rank: 99.9999999991673,
      publisher_url: 'http://www.twopeasandtheirpod.com',
    },
    {
      publisher: 'My Baking Addiction',
      title: 'Pizza Dip',
      source_url: 'http://www.mybakingaddiction.com/pizza-dip/',
      recipe_id: '2ec050',
      image_url:
        'http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg',
      social_rank: 99.99999999826605,
      publisher_url: 'http://www.mybakingaddiction.com',
    },
    {
      publisher: 'The Pioneer Woman',
      title: 'Pizza Potato Skins',
      source_url:
        'http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/',
      recipe_id: '6fab1c',
      image_url: 'http://forkify-api.herokuapp.com/images/pizza3464.jpg',
      social_rank: 99.99999999760887,
      publisher_url: 'http://thepioneerwoman.com',
    },
    {
      publisher: 'Bon Appetit',
      title: 'No-Knead Pizza Dough',
      source_url:
        'http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough',
      recipe_id: '49346',
      image_url:
        'http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg',
      social_rank: 99.99999999743466,
      publisher_url: 'http://www.bonappetit.com',
    },
    {
      publisher: 'Simply Recipes',
      title: 'Homemade Pizza',
      source_url: 'http://www.simplyrecipes.com/recipes/homemade_pizza/',
      recipe_id: '36453',
      image_url:
        'http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg',
      social_rank: 99.99999998833789,
      publisher_url: 'http://simplyrecipes.com',
    },
    {
      publisher: 'Closet Cooking',
      title: 'Taco Quesadilla Pizzas',
      source_url:
        'http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html',
      recipe_id: '35626',
      image_url:
        'http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg',
      social_rank: 99.99999998319973,
      publisher_url: 'http://closetcooking.com',
    },
    {
      publisher: 'All Recipes',
      title: 'Jay’s Signature Pizza Crust',
      source_url:
        'http://allrecipes.com/Recipe/Jays-Signature-Pizza-Crust/Detail.aspx',
      recipe_id: '17796',
      image_url: 'http://forkify-api.herokuapp.com/images/237891b5e4.jpg',
      social_rank: 99.99999997246182,
      publisher_url: 'http://allrecipes.com',
    },
    // {
    //   publisher: 'Closet Cooking',
    //   title: 'Avocado Breakfast Pizza with Fried Egg',
    //   source_url:
    //     'http://www.closetcooking.com/2012/07/avocado-breakfast-pizza-with-fried-egg.html',
    //   recipe_id: '35097',
    //   image_url:
    //     'http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg',
    //   social_rank: 99.99999990783806,
    //   publisher_url: 'http://closetcooking.com',
    // },
  ];
}
