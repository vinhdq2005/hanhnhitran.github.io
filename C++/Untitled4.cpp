#include<bits/stdc++.h>
using namespace std;


signed main(){
    long double a, b, c;
    cin >> a >> b >> c;
    if(a == 0){
        if(b == 0){
            if(c == 0) cout << "INFINITE NUMBER OF SOLUTIONS\n";
            else cout << "NO SOLUTION\n";
        }
        else cout << -(c/b) << "\n";
    }
    else{
        long double tmp = b * b - 4 * a * c;
        if(tmp < 0) cout << "NO SOLUTION\n";
        else if(tmp == 0) cout << -(b / (2 * a)) << "\n";
        else{
            int x1 = -b + sqrt(tmp), x2 = -b - sqrt(tmp);
            x1 /= (2 * a);
            x2 /= (2 * a);
            cout << x1 << "\n";
            cout << x2 << "\n";
        }
    }
}

