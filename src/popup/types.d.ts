export enum DifficultyEnum{
  'Hard',
  'Medium',
  'Easy'
}
export interface DifficultyType {
  text: DifficultyEnum
  color: string
}
export interface DifficultiesType{
  [number]: DifficultyType
}

export interface RecipeType{
  name: string
  origin: string
  description: string
  difficulty: number
  protein: string
  produce: string
  spice: string
  cookingOil: string
  volume: string
  serves: string
  authenticity: string
  stock: string
}
