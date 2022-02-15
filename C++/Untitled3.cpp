#pragma GCC optimize("Ofast")
#include<bits/stdc++.h>
using namespace std;
 
#define int long long
#define fi first
#define se second
#define pb push_back
#define ins insert
#define er erase
 
typedef pair<int, int> ii;
typedef pair<ii, int> iii;
typedef pair<ii, ii> iiii;
 
const int oo = 1e18 + 7, mod = 1e9 + 7;
 
const int N = 1e3 + 5, MAXA = 1e6 + 5;
 
int n;
ii a[2 * N];
int itr[MAXA];
bool used[N * 2];
 
void pre(){
	for(int i = 1; i <= 1000000; i++) itr[i] = -1;
}
 
void process(){
	cin >> n;
	for(int i = 1; i <= 2 * n; i++){
		cin >> a[i].fi;
		a[i].se = i;
		used[i] = 0;
	}
	sort(a + 1, a + 2 * n + 1);
	bool ok = 0;
	for(int i = 1; i < 2 * n; i++){
		for(int j = 1; j <= 2 * n; j++) used[j] = 0;
		for(int i = 2 * n; i >= 1; i--){
			if(i == 2 * n || a[i].fi != a[i + 1].fi){
				itr[a[i].fi] = i;
			}
		}
		int x = a[i].fi + a[2 * n].fi, ini = 2 * n;
		vector<ii> answer;
		answer.clear();
		bool ck = 1;
		int tempp = x;
		for(int j = 1; j <= n; j++){
			int tmp = x - a[ini].fi;
			if(tmp <= 0){
				ck = 0;
				break;
			}
			used[a[ini].se] = 1;		
			while(used[a[itr[tmp]].se]) itr[tmp]--;
			if(tmp <= 0 || itr[tmp] == -1 || a[itr[tmp]].fi != tmp){
				ck = 0;
				break;
			}
			answer.pb({a[ini].fi, a[itr[tmp]].fi});
			used[a[itr[tmp]].se] = 1;
			x = a[ini].fi;
			while(used[a[ini].se]) ini--;
			while(used[a[itr[tmp]].se]) itr[tmp]--;
		}
		if(ck){
			cout << "YES\n";
			cout << tempp << "\n";
			ok = 1;
			for(int i = 0; i < answer.size(); i++) cout << answer[i].fi << " " << answer[i].se << "\n";
			break;
		}
	}
	for(int i = 1; i <= 2 * n; i++) itr[a[i].fi] = -1;
	if(!ok){
		cout << "NO\n";
	}
}
 
signed main(){
	ios_base::sync_with_stdio(0);
	pre();
	int t;
	cin >> t;
	while(t--) process();
}

// ----------------------------

for(int i = 1; i < 2 * n; i++){
	for(int j = 1; j <=2 * n; j++) used[j] = 0;
	for(int i = 2 * n; i >= 1; 1--){
		if(i == 2 * n; || a[i].fi != a[i + 1].fi){
			itr[a[i].fi] = 1;
		}
	}
}
int x = a[i].fi + a[2 * n].fi, ini = 2 * n;
vectot<ii answer;
answer.clear();
	bool ck = 1;
	int tempp = x;
	for(int j = 1; j <= n; j++){
		int tmp = x - a[ini].fi;
		if(tmp <= 0){
			ck = 0;
			break;
		}
		used[a[ini].se] = 1;
		while(used[a[itr[tmp]].se]) itr [tmp]--
		if(tmp <= 0 || itr[tmp] == -1 || a[itr[tmp]].fi != tmp){
			ck = 0:
			break;
		}
		answer.pb({a[ini].fi, a[itr[tmp]].fi});
		used[a[itr[tmp]].se] = 1;
		x = a[ini].fi;
		while(used[a[ini].se]) ini--;
		while(used[a[itr[tmp]].se]) itr[tmp--;]
	}
