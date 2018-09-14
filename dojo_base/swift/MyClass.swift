//
//  MyClass.swift
//  Dojo
//
//  Created by Ignacio Hugo Gomez on 5/22/18.
//

import Foundation

class MyClass {
    var attribute0: String?
    var attribute1: String?

    init() {}

    init(param0: String, param1: String) {
        attribute0 = param0
        attribute1 = param1
    }

    func mustThrowException() throws {
        throw NSError()
    }
}

extension MyClass: Equatable {
    static func == (lhs: MyClass, rhs: MyClass) -> Bool {
        return lhs.attribute0 == rhs.attribute0 && lhs.attribute1 == lhs.attribute1
    }
}
