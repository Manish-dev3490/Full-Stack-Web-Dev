   export function validatename(name) {
        if (name.length < 3) return "Name must be at least 3 characters";
        if (name.length > 20) return "Name must be max 20 characters";
        return "";
    }

    export function validateemail(email) {
        if (email.length < 12) return "Email must be at least 12 characters";
        if (email.length > 40) return "Email too long";
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) return "Invalid email format";

        return "";
    }


   export function validatephone(phone) {
        if (phone.length !== 10) return "Phone must be 10 digits";
        return "";

    }

    export function validatepassword(password) {
        if (password.length < 6) return "Password must be at least 6 characters";
        if (password.length > 20) return "Password too long";
        return "";

    }