
        window.addEventListener("scroll", function () {
            var navbar = document.getElementById("navbar");
            var windowPosition = window.scrollY > window.innerHeight / 8;

            if (windowPosition) {
                navbar.classList.add("bg-black");
            } else {
                navbar.classList.remove("bg-black");
            }
        });
        // Smooth scrolling to the "home" section when the "home" link is clicked
        document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
            e.preventDefault();
            var homeSection = document.getElementById('home');
            homeSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
        // Smooth scrolling to the "about" section when the "about" link is clicked
        document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
            e.preventDefault();
            var aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
        // Smooth scrolling to the "skills" section when the "skills" link is clicked
        document.querySelector('a[href="#skills"]').addEventListener('click', function (e) {
            e.preventDefault();
            var skillsSection = document.getElementById('skills');
            skillsSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
        // Smooth scrolling to the "projects" section when the "projects" link is clicked
        document.querySelector('a[href="#projects"]').addEventListener('click', function (e) {
            e.preventDefault();
            var projectsSection = document.getElementById('projects');
            projectsSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
        //dropdown menu
        var dropdownIcon = document.getElementById("dropdown-icon");
        dropdownIcon.addEventListener("click", toggleDropdown);

        // Function for toggling dropdown menu
        function toggleDropdown() {
            var dropdownContent = document.getElementById("dropdown-content");
            dropdownContent.classList.toggle('hidden');
        }

        // Function for hiding dropdown menu on large screens
        window.addEventListener('resize', () => {
            var dropdownContent = document.getElementById("dropdown-content");
            if (window.innerWidth >= 768) {
                dropdownContent.classList.add('hidden');
            }
        });
        // Make dropdown menu disappear when a menu item is clicked
        var menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(function (menuItem) {
            menuItem.addEventListener('click', toggleDropdown);
        });


