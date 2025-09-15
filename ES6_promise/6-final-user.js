import signUpUser from "./4-user-promise"
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const user_promise = signUpUser(firstName, lastName);
    const photo_promise = uploadPhoto(fileName);

    return Promise.allSettled([user_promise, photo_promise])
        .then((results) => {
            return results.map(result => ({
                status: result.status,
                value: result.status === 'fulfilled' 
                ? result.value 
                : result.reason.toString()
            }));
        });
}
