package com.example.demo_angular;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.JavascriptExecutor;

import java.time.Duration;

public class SeleniumTest {

    public static void main(String[] args) {
        // Set the path to your chromedriver (adjust the path as per your setup)
    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\DanielOriKatsale\\.cache\\selenium\\chromedriver");


        // Initialize the WebDriver (ChromeDriver in this case)
    	// Automatically download and set up the correct ChromeDriver version
        WebDriverManager.chromedriver().setup();

        // Initialize the WebDriver
        WebDriver driver = new ChromeDriver();

        try {
            // Launch a page
            driver.get("https://example.com");

            // Click on a link (replace with an actual link on the page)
            WebElement link = driver.findElement(By.linkText("Click Me"));
            link.click();

            // Wait for the next page or element to load
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            wait.until(ExpectedConditions.presenceOfElementLocated(By.id("formId"))); // Wait for the form to appear

            // Fill out a form (replace with actual input fields on the page)
            WebElement inputField = driver.findElement(By.id("inputField"));
            inputField.sendKeys("Sample Text");

            WebElement submitButton = driver.findElement(By.id("submitButton"));
            submitButton.click();

            // Verify an object (for example, check if a success message appears)
            WebElement successMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("successMessage")));
            if (successMessage.isDisplayed()) {
                System.out.println("Form submitted successfully!");
            } else {
                System.out.println("Form submission failed.");
            }

            // Wait (for example, to see the result before closing the browser)
            Thread.sleep(5000);  // Wait for 5 seconds

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Close the browser after the test
            driver.quit();
        }
    }
}
