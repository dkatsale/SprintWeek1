package com.example.demo_angular;

import org.springframework.web.bind.annotation.*;

@RestController
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
    
    public String reverseString(String message) {
    	StringBuilder reversedString = new StringBuilder("");
    	String result = "";
    	//int n = 0;
    	
    	for(int i = secretMessage.length() - 1; i >= 0; i--) {
    		reversedString.append(message.charAt(i));
    		//n++;
    	}
    	result = reversedString.toString();
    	
    	
    	return result;
    	
    	
    		
    	
    	
    }

    /*@PostMapping("/greet")
    public String greet(@RequestBody String name) {
        return "Hello, " + name;
    }*/
}
