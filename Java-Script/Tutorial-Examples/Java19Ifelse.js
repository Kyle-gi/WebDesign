const expression = process.argv[2];
switch (expression){
    case 'Oranges':
        console.log('I prefer Oranges');
        break;
    case 'Watermelons':
        console.log('I prefer watermelon!');
        break;
    case 'Apple':
        console.log('One apple a day keeps the doctir away');
        break;
        default:
            console.log(`Sorry, we are out of ${expression}`);
}