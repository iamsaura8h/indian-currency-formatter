
export interface FormatInrOptions {
    symbol?: boolean;   //option to add ₹ or not
    decimals?: number;   // option to add number of decimal places
}

/**
 * Formats a number into Indian currency format.
 * @param amount number to format
 * @param options optional config for symbol and decimals
 */

export function formatINR(amount: number, options: FormatInrOptions = {}): string {
    const { symbol = true, decimals = 2 } = options;

    // check if we got a number or not
    if (isNaN(amount)) {
        throw new Error("Invalid amount");
    }

    // number formatter and decimal config
    const formatter = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });

    // format the amount and return as per options of user
    const formatted = formatter.format(amount);
    return symbol? `₹${formatted}` : formatted ;

}