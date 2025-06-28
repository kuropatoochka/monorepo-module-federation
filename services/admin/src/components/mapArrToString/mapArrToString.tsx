export const mapArrToString = ( array: any[] ): string[] => {
      return array.filter((item) => Number.isInteger(item))
        .map(String)
};