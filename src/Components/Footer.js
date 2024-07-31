import React from "react";

{/*footer component used to pass props as project name */}
function Foot(props) {
    return (
        <div class="container-fluid bg-primary p-2">
            <footer>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Company</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Employers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Students</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Popular Topics</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Connect</a>
                    </li>
                </ul>
                <p>Project of {props.name}</p> {/*The component receives the argument as a props object: */}
                <p><a class="text-white" href="https://www.hyperiondev.com/">Hyperion Link</a></p>
            </footer>

        </div>

    );
}

export default Foot;