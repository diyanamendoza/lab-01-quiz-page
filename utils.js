export function countsAsAYes(userResponse) {
    return (userResponse.charAt(0).toLowerCase() === 'y');
}