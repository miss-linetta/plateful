import instance from "./instance"
import { GetAllMealDTO } from "../types/service";

class Meal {
    getAllMeal = async (): Promise<GetAllMealDTO> => {
        const res = await instance.get(`search.php?f=b`);
        return res.data;
    }

    getMeal = async (idMeal: any): Promise<GetAllMealDTO> => {
        const res = await instance.get(`lookup.php?i=${idMeal}`);
        return res.data;
    }
}

const MealService = new Meal();

export default MealService;

MealService.getAllMeal();