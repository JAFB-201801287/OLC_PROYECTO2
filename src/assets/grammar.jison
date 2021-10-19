/* description: Parses and executes mathematical expressions. */

/* LEXICO */
%lex
%options case-insensitive
%%

\s+                                     /* IGNORAR ESPACIOS EN BLANCO */
"//".*                                  /* IGNORAR COMENTARIO DE UNA LINEA */
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     /* IGNORAR COMENTARIO MULTI LINEA */


/* OPERADORES RELACIONALES ------------------------------------------------------------------------------------- */
"=="                  return '=='
"!="                  return '!='
"<"                   return '<'
"<="                  return '<='
">"                   return '>'
">="                  return '>='

/* OPERADORES LOGICOS ------------------------------------------------------------------------------------------ */
"||"                  return '||';
"&&"                  return '&& ';
"!"                   return '!';

/* OPERADORES DECREMENTO Y INCREMENTO -------------------------------------------------------------------------- */
"++"                  return '++';
"--"                  return '-- ';

/* OPERADOR TERNARIO ------------------------------------------------------------------------------------------- */
"?"                   return '?';

/* OPERADORES -------------------------------------------------------------------------------------------------- */
"*"                   return '*';
"/"                   return '/';
"-"                   return '-';
"+"                   return '+';
"^"                   return '^';
"!"                   return '!';
"%"                   return '%';

/* */
"="                   return '=';
"("                   return '(';
")"                   return ')';
"["                   return '[';
"]"                   return ']';
"{"                   return '{';
"}"                   return '}';
":"                   return ':';
";"                   return ';';

/* PALABRAS RESERVADAS ----------------------------------------------------------------------------------------- */
"new"                 return 'new';
// TIPOS DE DATOS
"int"                 return 'int';
"double"              return 'double';
"string"              return 'string';
"char"                return 'char';
"boolean"             return 'bolean';
// LISTA
"DynamicList"         return 'DynamicList';
"append"              return 'append';
"getValue"            return 'getValue';
"setValue"            return 'setValue';
// SENTENCIAS DE CONTROL
"if"                  return 'if';
"else"                return 'else';
// SWITCH, CASE
"switch"              return 'switch';
"case"                return 'case';
"default"             return 'default';
// CICLOS
"while"               return 'while';
"for"                 return 'for';
"do"                  return 'do';
// SENTENCIAS DE TRANSFERENCIA
"break"               return 'break';
"continue"            return 'continue';
// RETURN
"return"              return 'return';
// FUNCIONES
"WriteLine"           return 'WriteLine';
"toLower"             return 'toLower';
"toUpper"             return 'toUpper';
"length"              return 'length';
"truncate"            return 'truncate';
"round"               return 'round';
"typeof"              return 'typeof';
"toString’"           return 'toString’';
"toCharArray"         return 'toCharArray';
"start"               return 'start';
"with"                return 'with';
"void"                return 'void';


/* TIPOS DE DATOS ---------------------------------------------------------------------------------------------- */
[0-9]+("."[0-9]+)\b   return 'decimal';
[0-9]+\b              return 'entero';
"true"                return 'true';
"false"               return 'false';
['][^']*[']           return 'caracter';
["][^"]*["]           return 'cadena';

<<EOF>>               return 'EOF';
.                     { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%token INVALID

%start INICIO

%% /* language grammar */

INICIO
	: INSTRUCCIONES EOF { return $$; }
;

// INSTRUCCIONES
INSTRUCCIONES
	: INSTRUCCION INSTRUCCIONES
	| INSTRUCCION
	| error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
			  $$ = ('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);
	}
;

INSTRUCCION
	: PRINT {
		console.log('El valor de la expresión es: ' + $1);
		$$ = $1;
	}
;

// OPERACIONES ARITMETICAS
ARITMETICA
    : ARITMETICA '+' ARITMETICA
        {$$ = $1 + $3;}
    | ARITMETICA '-' ARITMETICA
        {$$ = $1 - $3;}
    | ARITMETICA '*' ARITMETICA
        {$$ = $1 * $3;}
    | ARITMETICA '/' ARITMETICA
        {$$ = $1 / $3;}
    | ARITMETICA '^' ARITMETICA
        {$$ = Math.pow($1, $3);}
    | ARITMETICA '!'
        {{
          $$ = (function fact(n) { return n == 0 ? 1 : fact(n - 1) * n; })($1);
        }}
    | ARITMETICA '%'
        {$$ = $1 / 100;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | entero
        {$$ = Number(yytext);}
	| decimal
        {$$ = Number(yytext);}
	| true
        {$$ = yytext;}
	| false
        {$$ = yytext;}
	| caracter
        {$$ = yytext.replaceAll("\'", "");}
	| cadena
        {$$ = yytext.replaceAll("\"", "");}
;

// WRITE LINE
PRINT 
	: WriteLine '(' ARITMETICA ')' ';'
	{ 
		$$ = $3;
	}
;


