export default function personalDetails() {
    const Bio = {
        name: "Joshua Oyebode",
        Height: 6.2,
        Ethnicity: "African"
    }
    
    const Password = {
        facebook: "jiggy",
        twitter: "jago"
    }

    return (
        <div>
            <h1>
                Personal Details
            </h1>
            <h3>
                About Myself:<br />
                {Bio}
            </h3> <br />
            <h3>
                Facebook Password:<br />
                {Password.facebook}
            </h3>
        </div>
    );
}