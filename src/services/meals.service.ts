import instance from "./instance"
import { GetRandomMealDTO } from "../types/service";

class Meal {
    getRandomMeal = async (): Promise<GetRandomMealDTO> => {
        const res = await instance.get(`/random.php`);
        return res.data;
    }
}

const MealService = new Meal()

export default MealService;

MealService.getRandomMeal();