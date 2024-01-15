import { DifficultiesType, RecipeType } from "./types";

export const difficulties:DifficultiesType = {
  1: {text:'Hard', color:'#FF003D'},
  2: {text:'Medium', color:'#F63B00'},
  3: {text:'Easy', color:'#6CF600'},
}
export const countries = [
  {"name": "Country origin", "code": ""},
  {"name": "Afghanistan", "code": "AF"},
  {"name": "land Islands", "code": "AX"},
  {"name": "Albania", "code": "AL"},
  {"name": "Algeria", "code": "DZ"},
  {"name": "American Samoa", "code": "AS"},
  {"name": "AndorrA", "code": "AD"},
  {"name": "Angola", "code": "AO"},
  {"name": "Anguilla", "code": "AI"},
  {"name": "Antarctica", "code": "AQ"},
  {"name": "Antigua and Barbuda", "code": "AG"},
  {"name": "Argentina", "code": "AR"},
  {"name": "Armenia", "code": "AM"},
  {"name": "Aruba", "code": "AW"},
  {"name": "Australia", "code": "AU"},
  {"name": "Austria", "code": "AT"},
  {"name": "Azerbaijan", "code": "AZ"},
  {"name": "Bahamas", "code": "BS"},
  {"name": "Bahrain", "code": "BH"},
  {"name": "Bangladesh", "code": "BD"},
  {"name": "Barbados", "code": "BB"},
  {"name": "Belarus", "code": "BY"},
  {"name": "Belgium", "code": "BE"}
];
export const recipeFormData: RecipeType = {
  "name": "",
  "origin": "",
  "description": "",
  "difficulty": 3,
  "protein": "",
  "produce": "",
  "spice": "",
  "cookingOil": "",
  "volume": "",
  "serves": "",
  "authenticity": "Unverified",
  "stock": ""
}
export const API_URL = 'https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes'
