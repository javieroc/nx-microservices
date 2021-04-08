import { CategoryCreateObject, CategoryUpdateObject } from "../types"
import { Category } from "../models"


const create = async (categoryPayload: CategoryCreateObject)  => {
  const category = await Category.create(categoryPayload).save();
  return category;
}

const update = async (categoryPayload: CategoryUpdateObject) => {
  // const category = await Category.update(categoryPayload).save();
  // return category;
}

export const CategoryService = {
  create,
  update,
}
