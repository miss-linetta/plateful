import instance from "./instance"
import { GetAllMealDTO, GetMealDTO } from "../types/service";
import { GetMealsResponse } from "./meal";

class Meal {
    getAllMeal = async (): Promise<GetMealDTO> => {
        const res = await instance.get(`/v1/1/search.php?f=b`);
        return res.data;
    }

    getMeal = async (idMeal: any): Promise<GetMealsResponse> => {
        const res = await instance.get(`/v1/1/lookup.php?i=${idMeal}`);
        return res.data;
    }
}

const MealService = new Meal();

export default MealService;

MealService.getAllMeal();