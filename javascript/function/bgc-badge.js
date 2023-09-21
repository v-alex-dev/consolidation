function bgcBadge(item){

    switch (item.textContent) {
        case "RPG":
            item.className +=' bg-red-600';
            break;
        case "Adventure":
            item.className +=' bg-orange-600';
            break;
        case 'Independent':
            item.className += ' bg-amber-600';
            break;
        case 'Course':
            item.className += ' bg-lime-600';
            break;
        case 'Simulation':
            item.className += ' bg-emerald-600';
            break;
        case '4X':
            item.className += ' bg-teal-600';
            break;
        case 'Strategy':
            item.className += ' bg-cyan-600';
            break;
        case 'Action':
            item.className += ' bg-violet-600';
            break;
        case 'Action-rpg':
            item.className += ' bg-pink-600';
            break;
        case 'MMO':
            item.className += ' bg-rose-600';
            break;
        case 'Arena':
            item.className += ' bg-green-600';
            break;
        case 'Platform':
            item.className += ' bg-yellow-600';
            break;
        case 'Tactical wargame':
            item.className += ' bg-amber-950';
            break;
        case 'Action-adventure':
            item.className += ' bg-violet-800';
            break;

    }
}

export {bgcBadge};