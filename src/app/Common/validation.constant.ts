export class ValidationConstant {
    public static panCardNumber = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    public static adhaarCard = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
    public static mobileNumber = /^(91)?[6-9][0-9]{9}$/;
    public static bankAccount = /^[0-9]{9,18}$/;
    public static IFSCNumber = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
    public static passport= /^[A-Z][1-9]\d\s?\d{4}[1-9]$/;
    public static drivingLicence=/^[A-Z]{2}[0-9\-]{1}[0-9]{1}[0-9 ]{1}[1-2]{1}[09]{1}[0-9]{2}[0-9]{7}$/;
    public static voterId= /^[A-Z]{3}[0-9]{7}$/

}
