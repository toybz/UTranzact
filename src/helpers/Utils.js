export default class Utils {

    static getUserIconType(userDetails) {

        return userDetails.image ? userDetails.image : userDetails.name.charAt(0)
    }

}
