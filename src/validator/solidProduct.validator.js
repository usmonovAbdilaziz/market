import Joi from "joi";

export const createSolidProductValidator = (data) => {
  const solid = Joi.object({
    productId: Joi.string().required(),
    clentId: Joi.string().required(),
    quantity: Joi.string().required(),
    totalPrice: Joi.string().required(),
  });
  return solid.validate(data);
};

export const updateSolidProductValidator = (data) => {
  const solid = Joi.object({
    productId: Joi.string().optional(),
    clentid: Joi.string().optional(),
    quantity: Joi.string().optional(),
    totalPrice: Joi.string().optional(),
  });
  return solid.validate(data);
};
