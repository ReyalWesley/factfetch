export async function fetchFact(category: string): Promise<(any | string)[] | null> {
    try {
        const response = await fetch(`http://numbersapi.com/random/${category.toLowerCase()}`);
        if (response.ok) {
            const data = await response.text();
            const now = new Date();
            const date = Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(now);
            return [ date, data ];
        } else {
            console.error(`Bad API request for: ${category}`);
            return null;
        }
    } catch (error) {
        console.error(`Request error for (${category})`, error);
        return null;
    }
}
