# C++基础

[课件](/lecture/3-5.pdf)

## 从Strach向C++迈进

### 为什么要学习C++
C++是信息学奥林匹克竞赛的唯一支持的语言，是一种高效的编程语言，可以用于编写操作系统、数据库、游戏等高性能程序。C++是C语言的超集，可以直接使用C语言的代码，同时还提供了许多新的特性，如面向对象编程、模板等。

### C++的基本语法
C++的基本语法与C语言类似，但是增加了一些新的特性，如引用、类、模板等。C++的程序由一个或多个函数组成，每个函数由函数头和函数体组成。函数头由返回值类型、函数名和参数列表组成，函数体由一对大括号括起来的语句组成。C++的程序从main函数开始执行，main函数是程序的入口。

### C++的Hello World程序
```cpp
#include <iostream>
int main() {
    std::cout << "Hello World!" << std::endl;
    return 0;
}
```

### C++的数据类型
C++的数据类型包括基本数据类型和复合数据类型。基本数据类型包括整型、浮点型、字符型、布尔型等。复合数据类型包括数组、结构体、类、指针等。C++还提供了类型转换操作符和类型别名等特性。
#### 类型表格
| 类型 | 描述 | 大小 | 范围 |
| --- | --- | --- | --- |
| bool | 布尔类型 | 1 字节 | true/false |
| char | 字符类型 | 1 字节 | -128~127 |
| unsigned char | 无符号字符类型 | 1 字节 | 0~255 |
| short | 短整型 | 2 字节 | -32768~32767 |
| unsigned short | 无符号短整型 | 2 字节 | 0~65535 |
| int | 整型 | 4 字节 | -2147483648~2147483647 |
| unsigned int | 无符号整型 | 4 字节 | 0~4294967295 |
| long | 长整型 | 4 字节 | -2147483648~2147483647 |
| unsigned long | 无符号长整型 | 4 字节 | 0~4294967295 |
| long long | 长长整型 | 8 字节 | -9223372036854775808~9223372036854775807 |
| unsigned long long | 无符号长长整型 | 8 字节 | 0~18446744073709551615 |
| float | 单精度浮点型 | 4 字节 | 1.2E-38~3.4E+38 |
| double | 双精度浮点型 | 8 字节 | 2.3E-308~1.7E+308 |
| long double | 长双精度浮点型 | 12 字节 | 3.4E-4932~1.1E+4932 |
| wchar_t | 宽字符类型 | 2 字节 | 0~65535 |
| char16_t | UTF-16 字符类型 | 2 字节 | 0~65535 |
| char32_t | UTF-32 字符类型 | 4 字节 | 0~4294967295 |

### C++的运算符

C++的运算符包括算术运算符、关系运算符、逻辑运算符、位运算符、赋值运算符、条件运算符、逗号运算符等。C++还提供了一些特殊的运算符，如sizeof运算符、类型转换运算符、成员访问运算符等。

### C++的流输入输出

C++的流输入输出是通过流对象和流运算符来实现的。流对象是用于输入输出的对象，流运算符是用于输入输出的运算符。C++提供了两种类型的流对象，分别是输入流对象和输出流对象。输入流对象用于从输入设备读取数据，输出流对象用于向输出设备写入数据。C++提供了两种类型的流运算符，分别是输入流运算符和输出流运算符。输入流运算符用于从输入设备读取数据，输出流运算符用于向输出设备写入数据。

### C++的控制结构

C++的控制结构包括顺序结构、选择结构和循环结构。顺序结构是程序按照顺序执行的结构，选择结构是根据条件选择执行的结构，循环结构是根据条件循环执行的结构。C++提供了多种选择结构和循环结构，如if语句、switch语句、while语句、do-while语句、for语句等。

### C++的函数

C++的函数是一段完成特定任务的代码块，可以重复使用。函数由函数头和函数体组成，函数头由返回值类型、函数名和参数列表组成，函数体由一对大括号括起来的语句组成。C++的函数可以有多个参数，可以有多个返回值，可以有默认参数，可以有可变参数，可以有函数重载，可以有函数模板等特性。

### C++的数组

C++的数组是一种存储相同类型数据的集合，可以通过下标访问数组中的元素。C++的数组可以是一维数组、二维数组、多维数组等。C++的数组可以通过指针访问数组中的元素，可以通过引用传递数组作为函数参数，可以通过模板实现通用数组等。

### C++的字符串

C++的字符串是一种存储字符序列的对象，可以通过下标访问字符串中的字符。C++的字符串可以是字符数组、字符串对象、字符串指针等。C++的字符串可以通过引用传递字符串作为函数参数，可以通过模板实现通用字符串等。

### C++的指针

C++的指针是一种存储地址的变量，可以通过指针访问内存中的数据。C++的指针可以指向基本数据类型、复合数据类型、函数等。C++的指针可以通过引用传递指针作为函数参数，可以通过模板实现通用指针等。

### C++的引用

C++的引用是一种别名，可以用于访问变量的值。C++的引用可以指向基本数据类型、复合数据类型、函数等。C++的引用可以通过引用传递引用作为函数参数，可以通过模板实现通用引用等。

### C++的结构体

C++的结构体是一种自定义数据类型，可以包含多个成员变量。C++的结构体可以通过点运算符访问成员变量，可以通过引用传递结构体作为函数参数，可以通过模板实现通用结构体等。

### C++的类

C++的类是一种自定义数据类型，可以包含多个成员变量和成员函数。C++的类可以通过点运算符访问成员变量和成员函数，可以通过引用传递类作为函数参数，可以通过模板实现通用类等。

### C++的模板

C++的模板是一种通用编程技术，可以实现通用数据类型和通用算法。C++的模板可以实现通用函数、通用类、通用结构体等。C++的模板可以通过类型参数和非类型参数实现通用性，可以通过模板特化和模板偏特化实现特化。

### C++的异常处理

C++的异常处理是一种错误处理机制，可以捕获和处理程序中的异常。C++的异常处理包括try块、catch块、throw语句、异常类等。C++的异常处理可以处理程序中的运行时错误，可以提高程序的健壮性。

### C++的标准库

C++的标准库是一组标准的类和函数，可以用于开发C++程序。C++的标准库包括输入输出库、容器库、算法库、迭代器库、函数对象库、数值库、日期时间库、正则表达式库等。C++的标准库提供了丰富的功能和高效的性能，可以提高程序的开发效率和运行效率。

### C++的编程规范

C++的编程规范是一种编程风格，可以提高程序的可读性和可维护性。C++的编程规范包括命名规范、缩进规范、注释规范、代码风格规范等。C++的编程规范可以帮助程序员编写出高质量的代码，提高程序的质量和效率。

### C++的调试技术

C++的调试技术是一种调试程序的方法，可以帮助程序员找出程序中的错误。C++的调试技术包括断点调试、单步调试、变量监视、表达式监视、调用堆栈等。C++的调试技术可以提高程序员的调试效率，缩短程序的开发周期。