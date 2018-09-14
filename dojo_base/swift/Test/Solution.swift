//
//  Solution.swift
//  Dojo
//
//  Created by Ignacio Hugo Gomez on 5/22/18.
//

import XCTest

class Solution: XCTestCase {

    func test_should_be_both_equal() {
        let anInstance = MyClass()
        let anotherInstance = MyClass()

        XCTAssertEqual(anInstance == anotherInstance, true)
    }

    func test_should_throw_exception() {
        let anInstance = MyClass()
        
        XCTAssertThrowsError(try anInstance.mustThrowException())
    }
}
