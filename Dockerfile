# Etapa 1: Build com Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Cria diretório de trabalho e copia o projeto
WORKDIR /app
COPY . .

# Compila e gera o .jar (ignora os testes se quiser)
RUN mvn clean package -DskipTests

# Etapa 2: Imagem final com JDK apenas
FROM eclipse-temurin:17-jdk

# Cria diretório no container
WORKDIR /app

# Copia o .jar gerado da etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta padrão do Spring Boot
EXPOSE 8080

# Comando de execução
ENTRYPOINT ["java", "-jar", "app.jar"]
