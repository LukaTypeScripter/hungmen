interface Item {
    name: string;
    selected: boolean; 
  }
  
  export function getRandomObjectNameAndStore(items: Item[]): string | undefined {
    if (items.length === 0) return undefined; 
  
    const randomIndex = Math.floor(Math.random() * items.length); 
    const randomName = items[randomIndex].name; 
    localStorage.setItem('randomName', randomName || '');
    return randomName; 
  }
