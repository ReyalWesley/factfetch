export async function fetchFact(category: 'date' | 'math'): Promise<string | null> {
    try {
        const response = await fetch(`http://numbersapi.com/random/${category.toLowerCase()}`);
        if (response.ok) {
            const data = await response.text();
            return data;
        } else {
            console.error(`Bad API request for: ${category}`);
            return null;
        }
    } catch (error) {
        console.error(`Request error for (${category})`, error);
        return null;
    }
}
