package com.example.demo_angular;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class GreetingController {
	
	private String secretMessage = "";
	
	
    @GetMapping("/greet")
    public String greet() {
        return "Hello, World!";
    }
    
    @PostMapping("/greet")
    public String angular(@RequestBody String fromAngular) {
    	System.out.println(fromAngular);
    	secretMessage = fromAngular;
    	return fromAngular;
    }
    @GetMapping("/secret")
    public String secret() {
    	String reversed = reverseString(secretMessage);
        return reversed + ":from spring boot";
    }
    
    private String reverseString(String message) {
    	StringBuilder reversedString = new StringBuilder(message);
    	String result = reversedString.reverse().toString();
    	
    	
    	
    	return result;

    }

}
