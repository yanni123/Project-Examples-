var view = {
    name: "Joe",
    occupation: "Web Application developer"
};

function loadtemp() {
    var output = Mustache.render("{{name}} is a  {{occupation}}", view);
    document.getElementById('person').innerHTML = output;

    basicTemplate();
    enumerableSection();
    enumerableSectionWithObjects();
    nestedObjects();
    dereferencing();
    functionReference();
}

function basicTemplate() {
    var person = {
        firstName: "Christophe",
        lastName: "Coenraets",
        blogURL: "http://coenraets.org"
    };
    var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
    var html = Mustache.to_html(template, person);
    $('#BasicTemplate').html(html);
}

function enumerableSection() {
    var data = {
        name: "John Smith",
        skills: ['JavaScript', 'PHP', 'Java']
    };
    var tpl = "{{name}} skills:<ul>{{#skills}}<li>{{.}}</li>{{/skills}}</ul>";
    var html = Mustache.to_html(tpl, data);
    $('#EnumerableSection').html(html);
}

function enumerableSectionWithObjects() {
    var data = {
        employees: [
            {
                firstName: "Christophe",
                lastName: "Coenraets"
            },
            {
                firstName: "John",
                lastName: "Smith"
            }
        ]
    };
    var template = "Employees:<ul>{{#employees}}" +
        "<li>{{firstName}} {{lastName}}</li>" +
        "{{/employees}}</ul>";
    var html = Mustache.to_html(template, data);
    $('#EnumerableSectionWithObjects').html(html);

}

function nestedObjects() {
    var person = {
        firstName: "Christophe",
        lastName: "Coenraets",
        blogURL: "http://coenraets.org",
        manager: {
            firstName: "John",
            lastName: "Smith"
        }
    };
    var template = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>" +
        "Manager: {{manager.firstName}} {{manager.lastName}}";
    var html = Mustache.to_html(template, person);
    $('#nestedObjects').html(html);
}

function dereferencing() {
    var person = {
        firstName: "John",
        lastName: "Smith",
        blogURL: "http://johnsmith.com",
        manager: {
            firstName: "Lisa",
            lastName: "Jones"
        }
    };
    var tpl = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>" +
        "{{#manager}}Manager: {{firstName}} {{lastName}}{{/manager}}";
    var html = Mustache.to_html(tpl, person);
    $('#dereferencing').html(html);
}

function functionReference() {
    var product = {
        name: "FooBar",
        price: 100,
        salesTax: 0.05,
        totalPrice: function () {
            return this.price + this.price * this.salesTax;
        }
    };
    var template = "<p>Product Name: {{name}}</p>Price: {{totalPrice}}";
    var html = Mustache.to_html(template, product);
    $('#functionReference').html(html);
}

//condition 

/*Templates can include conditional sections. 
Conditional sections only render if the
 condition evaluates to true.*/

var data = {
    employees: [
        {
            firstName: "Christophe",
            lastName: "Coenraets",
            fullTime: true,
            phone: "617-123-4567"
        },
        {
            firstName: "John",
            lastName: "Smith",
            fullTime: false,
            phone: "617-987-6543"
        },
        {
            firstName: "Lisa",
            lastName: "Jones",
            fullTime: true,
            phone: "617-111-2323"
        },
    ]
};


var data = {
    firstName: "Christophe",
    lastName: "Coenraets",
    address: "1 Main street",
    city: "Boston",
    state: "MA",
    zip: "02106"
};

