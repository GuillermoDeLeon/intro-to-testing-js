// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});

// Unit tests for sayHello() function
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello Jane!");
    });
    it('should return the string "Hello Alex!"', function() {
        expect(sayHello("Alex")).toBe("Hello Alex!");
    });
    it('should return the string "Hello Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello Pat!");
    });
    it('Empty string that should return the string "Hello World!"', function() {
        expect(sayHello(" ")).toBe("Hello World!");
    });
    it('should return "Hello World!" if input === true', function() {
        expect(sayHello(true)).toBe("Hello World!");
    });
    it('should return "Hello World!" if input === false', function() {
        expect(sayHello(false)).toBe("Hello World!");
    });

    //     expect(sayHello(false)).toBe("Hello World!");
    // });
//
//     // it('should return the string "Say Hello" when executed', function() {
//     //     expect(sayHello()).toBe("Say Hello");
//     // });
//     // it("should never return 'undefined when called", function() {
//     //     expect(sayHello()).not.toBe(undefined);
//     // });
//
});