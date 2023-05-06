export function ingredientList(data: any) {
    if (!data) {
      return [];
    }

    let propertiesArr = Object.values(data);

    let ingredients = [];

    for (let i = 9; i < 28; i++) {
      if (!propertiesArr[i]) break;
      ingredients.push(propertiesArr[i]);
    }

    let measures = [];
    for (let i = 29; i < 48; i++) {
      if (!propertiesArr[i]) break;
      measures.push(propertiesArr[i]);
    }

    let ingredMeasList = [];

    for (let i = 0; i < ingredients.length; i++) {
      ingredMeasList.push(`${ingredients[i]} - ${measures[i]}`);
    }

    return ingredMeasList;
}