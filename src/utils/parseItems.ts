export const parseItems = (parseString: string | undefined) => {
    if (!parseString) {
        return [''];
    }
    return parseString.split(', ').map(genre => genre.trim());
};
